document.getElementById("checkbox-2").addEventListener("change", function() {
    // Checkbox işaretlendiğinde veya işaret kaldırıldığında bu fonksiyon çalışır
    if (this.checked) {
      window.open("ekibimiz_kimya.html", "_blank"); // Yeni bir sayfa aç
    }
  });
  