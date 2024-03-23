window.addEventListener('scroll', function() {
    var image = document.getElementById('animated-image');
    var rect = image.getBoundingClientRect();
    var triggerPosition = window.innerHeight - rect.height;
  
    if (window.scrollY > triggerPosition) {
      image.style.top = 'calc(100% - ' + (rect.height + 20) + 'px)'; // 20px padding için
    }
  });

  
  const button = document.getElementById('myButton');

button.addEventListener('mouseover', function() {
  button.style.transform = 'scale(1.4)';
});

button.addEventListener('mouseout', function() {
  button.style.transform = 'scale(1)';
});
