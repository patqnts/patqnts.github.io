

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
          image.attr('src', 'https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.6435-9/60359695_2122190367893764_7423022441879830528_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHo7cbLFMvZrK--fs4gUJttjGDVgWaIJliMYNWBZogmWKsL2E0HHkE5MP0IRlFcs412Yf-nTQ3PX8gGEm5LY-6D&_nc_ohc=ptAtjf4RGMkAX98SVr8&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfAnzHs2wH2OIa6yS78J81mc7a5Xwx9jPuoVs4JA5djvnQ&oe=64D48D13');
          // Fade in the new image
          image.fadeIn(500);
        });
      } else {
        // Fade out the current image
        image.fadeOut(200, function() {
          // Set the light mode image source
          image.attr('src', 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/346659050_275204754893305_5914072027508400750_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfiw7uhVCO-9f45vLim02EnU5sbcD5G06dTmxtwPkbTjq0aJhLnzrzaoV2KXPcUvFxiiv4szX3ocMkFDUCuqL6&_nc_ohc=43doaVGN8xgAX83IeJj&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfB4Ctji-Uvv_TNpzjbwZAPyfXisz7CwmiJkFWnzy8BFSQ&oe=64CE653B');
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

