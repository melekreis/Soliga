document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const boxes = document.querySelectorAll('.slider > div');
    const boxWidth = boxes[0].offsetWidth;
    let currentIndex = 0;
    let intervalId;

    function startAutoSlide() {
        intervalId = setInterval(() => {
            currentIndex++;
            slider.style.transform = `translateX(${-currentIndex * boxWidth}px)`; // Slider'ı kaydır

            if (currentIndex === boxes.length) { // Son div ekrana girer girmez
                currentIndex = 0; // İlk div'e dön
                slider.style.transition = 'none'; // Geçiş efektini kapat
                slider.style.transform = `translateX(0)`; // Slider'ı başa döndür
                setTimeout(() => {
                    slider.style.transition = ''; // Geçiş efektini tekrar aç
                }, 10);
            }
        }, 1400);
    }

    function slideNext() {
        clearInterval(intervalId);
        currentIndex++;
        if (currentIndex >= boxes.length) {
            currentIndex = 0;
        }
        slider.style.transform = `translateX(${-currentIndex * boxWidth}px)`;
    }

    startAutoSlide(); // Otomatik kaydırma işlemini başlat

    slider.addEventListener('mouseenter', () => {
        clearInterval(intervalId); // Fare slider üzerine geldiğinde otomatik kaydırma işlemini durdur
    });

    slider.addEventListener('mouseleave', () => {
        startAutoSlide(); // Fare slider üzerinden ayrıldığında otomatik kaydırma işlemini tekrar başlat
    });

    // İleri butonuna tıklama olayını dinle
    document.getElementById('next-button').addEventListener('click', function() {
        slideNext();
    });
});
