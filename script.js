

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
      $('#menu-toggle').toggleClass('dark-mode');
      $('.container').toggleClass('dark-mode');
  
      // Change the image source based on dark mode state with fade-in transition
      var image = $('#about .grid-item .image-container img');
      if ($('#about').hasClass('dark-mode')) {
        // Fade out the current image
        image.fadeOut(200, function() {
          // Set the dark mode image source
          image.attr('src', 'media/light-image.jpg');
          // Fade in the new image
          image.fadeIn(500);
        });
      } else {
        // Fade out the current image
        image.fadeOut(200, function() {
          // Set the light mode image source
          image.attr('src', 'media/dark-image.jpg');
          // Fade in the new image
          image.fadeIn(500);
        });
      }
    });
  });
  


  var isAnimating = false;

function animateAttack(element) {
  if (isAnimating) {
    return; // Skip animation if it's already in progress
  }

  isAnimating = true;
  var originalSrc = element.src;
  element.src = "media/slime-attack.gif";

  setTimeout(function() {
    element.src = originalSrc;
    isAnimating = false;
  }, 1000); // Change the value (in milliseconds) to match the attack animation duration
}

