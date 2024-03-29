const slider = document.querySelector('.slider2');
const slides = slider.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;
let isTransitioning = false;

function nextSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    currentIndex = (currentIndex + 1) % slides.length;
    moveSlider();
  }
}

function prevSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveSlider();
  }
}

function moveSlider() {
  const offset = -currentIndex * slideWidth;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${offset}px)`;
  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

setInterval(nextSlide, 2500); // Otomatik geçiş için 3 saniyede bir çağrılır



// Butona tıklandığında çalışacak işlev
function gitButonaTikla() {
  // İlgili div'in konumunu al
  var ortaDiv = document.getElementById('ortaDiv');

  // Eğer div varsa
  if (ortaDiv) {
      // Sayfanın yüksekliğini ve görünür alan yüksekliğini al
      var sayfaYuksekligi = window.innerHeight;
      var divYuksekligi = ortaDiv.clientHeight;

      // Div'in sayfanın ortasına gelmesi için gerekli kaydırma miktarını hesapla
      var kaydirmaMiktari = ortaDiv.offsetTop - (sayfaYuksekligi - divYuksekligi) / 2;

      // Div'e git
      window.scrollTo({ top: kaydirmaMiktari, behavior: 'smooth' });
  }
}

// Butonu seç
var gitButonu = document.getElementById('gitButonu');

// Butona tıklanma olayı ekle
if (gitButonu) {
  gitButonu.addEventListener('click', gitButonaTikla);
}