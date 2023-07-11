// Function to handle the scroll event
function handleScroll() {
  const sections = document.querySelectorAll('section');

  // Get the current scroll position
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Iterate over each section
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // Calculate the distance of the section from the current scroll position
    const distanceFromTop = sectionTop - scrollPosition;

    // Calculate the opacity based on the distance
    const opacity = 1 - Math.abs(distanceFromTop) / sectionHeight;

    // Set the opacity of the section
    section.style.opacity = opacity;
    section.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
  });
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger the initial scroll event to fade in the visible sections on page load
handleScroll();


window.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  ScrollReveal().reveal(sections, {
    delay: 200,
    distance: "10px",
    easing: "ease-in-out",
    origin: "bottom",
    opacity: 0,
    interval: 150
  });
});

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



  

  