window.addEventListener('DOMContentLoaded', function() {
  // Get the parent wrapper and all ascii-art elements inside it.
  const asciiWrapper = document.querySelector('.ascii-art-wrapper');
  const asciiElements = asciiWrapper.querySelectorAll('.ascii-art');

  // Hide all ascii-art elements.
  asciiElements.forEach(el => {
    if (!el.classList.contains('hide')) {
      el.classList.add('hide');
    }
  });

  // Variable to keep track of the currently visible element.
  let currentVisible = null;

  // Function to randomly display one ascii-art element.
  function showRandom() {
    // Hide the currently visible element, if any.
    if (currentVisible) {
      currentVisible.classList.add('hide');
    }
    // Convert NodeList to Array and choose a random index.
    const allElements = Array.from(asciiElements);
    const randomIndex = Math.floor(Math.random() * allElements.length);
    // Remove the 'hide' class from the chosen element.
    const newElement = allElements[randomIndex];
    newElement.classList.remove('hide');
    // Update the current visible element.
    currentVisible = newElement;
  }

  // Initially show one random ascii-art element.
  showRandom();

  // Variable to hold the cycling interval.
  let cycleInterval = null;

  // When the user hovers over the wrapper, start cycling.
//    asciiWrapper.addEventListener('mouseenter', function() {
//      // Only start a new interval if one isn't already running.
//      if (!cycleInterval) {
//        cycleInterval = setInterval(showRandom, 50); // change every 2 seconds
//      }
//    });

  // When the user leaves the wrapper, stop cycling.
//    asciiWrapper.addEventListener('mouseleave', function() {
//      clearInterval(cycleInterval);
//      cycleInterval = null;
//    });
});
