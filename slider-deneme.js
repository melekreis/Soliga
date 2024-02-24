document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const boxes = document.querySelectorAll('.slider > div');
    const boxWidth = boxes[0].offsetWidth;
    const totalWidth = boxes.length * boxWidth;
    let currentIndex = 0;
    let intervalId;
  
    // Slider'ı başa dönerek tekrar etmesini sağlayan fonksiyon
    function loop() {
      if (currentIndex === boxes.length) {
        currentIndex = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
          slider.style.transition = '';
        }, 10);
      }
    }
  
    function startAutoSlide() {
      intervalId = setInterval(() => {
        currentIndex++;
        slider.style.transform = `translateX(${-currentIndex * boxWidth}px)`;
        loop(); // Her slaydın sonunda başa dönmesi için kontrol
      }, 2000); // Her 2 saniyede bir slaydı kaydır
    }
  
    startAutoSlide(); // Otomatik kaydırma işlemini başlat
  
    slider.addEventListener('mouseenter', () => {
      clearInterval(intervalId); // Fare slider üzerine geldiğinde otomatik kaydırma işlemini durdur
    });
  
    slider.addEventListener('mouseleave', () => {
      startAutoSlide(); // Fare slider üzerinden ayrıldığında otomatik kaydırma işlemini tekrar başlat
    });
  });
  