<?php
$serverName = "localhost";
$connectionOptions = array(
    "Database" => "Soligadatabase",
    "Uid" => "kullanici_adi",
    "PWD" => "sifre"
);

// PDO ile MSSQL'e bağlanma
$conn = new PDO("sqlsrv:Server=$serverName;Database=".$connectionOptions['Database'], $connectionOptions['Uid'], $connectionOptions['PWD']);

// Bağlantıyı kontrol et
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Formdan gelen verileri alın
$isim = $_POST['isim'];
$soyisim = $_POST['soyisim'];
$email = $_POST['email'];
$telefon = $_POST['telefon'];
$kategori = $_POST['kategori'];
$yardim = $_POST['yardım'];

// SQL sorgusu
$sql = "INSERT INTO Gelen_Talepler (Isim, Soyisim, Email, Telefon, Kategori, Yardim) 
        VALUES (?, ?, ?, ?, ?, ?)";

// Sorguyu hazırla
$stmt = $conn->prepare($sql);

// Sorguyu çalıştır
$result = $stmt->execute(array($isim, $soyisim, $email, $telefon, $kategori, $yardim));

// Sonuçları kontrol et
if ($result) {
    echo "Veri başarıyla eklendi";
} else {
    echo "Hata: Veri eklenemedi";
}

// Bağlantıyı kapat
$conn = null;
?>
