document.getElementById('rotatingImage').addEventListener('mouseenter', function() {
  this.style.animation = 'rotate 1s linear infinite alternate';
});

document.getElementById('rotatingImage').addEventListener('mouseleave', function() {
  this.style.animation = ''; // Mouse çıkınca animasyonu kaldırıyoruz
});
