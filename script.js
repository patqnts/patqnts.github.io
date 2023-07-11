

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 0) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});


var slideshowItems = document.getElementsByClassName('slideshow-items');
  var currentIndex = 0;
  
  setInterval(function() {
    slideshowItems[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slideshowItems.length;
    slideshowItems[currentIndex].style.opacity = 1;
  }, 3000);

  var slideshowItems1 = document.getElementsByClassName('slideshow-item');
  var currentIndexs = 0;
  
  setInterval(function() {
    slideshowItems1[currentIndexs].style.opacity = 0;
    currentIndexs = (currentIndexs + 1) % slideshowItems1.length;
    slideshowItems1[currentIndexs].style.opacity = 1;
  }, 3000);



  $(document).ready(function() {
    $('#day-night-toggle').change(function() {
      $('body').toggleClass('dark-mode');
      $('header').toggleClass('dark-mode');
      $('#about').toggleClass('dark-mode');
      $('.hamburger').toggleClass('dark-mode');
      $(' #menu-toggle').toggleClass('dark-mode');
      $('.container').toggleClass('dark-mode');
    });
  });
  

  