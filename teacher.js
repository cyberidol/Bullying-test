// Select all input elements inside the .rating class and loop over each one
document.querySelectorAll('.rating input').forEach(star => {
  // Add an event listener to each radio input for when its value changes (i.e., when a star is selected)
  star.addEventListener('change', function() {
    
    // Once a star is selected, change the text content of the element with id 'rating-header'
    document.getElementById('rating-header').textContent = "Thanks for supporting this website.";
  });
});
