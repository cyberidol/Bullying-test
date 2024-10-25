// Runs the script after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Selects the first section and third section elements
    const firstSection = document.querySelector(".first-section");
    const thirdSection = document.querySelector(".third-section");

    // Sets up an IntersectionObserver to observe when the third section is in view
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Checks if the third section is currently intersecting (visible on screen)
            if (entry.isIntersecting) {
                // Hides the first section by adding 'hidden' class and removing 'visible'
                firstSection.classList.add("hidden");
                firstSection.classList.remove("visible");
            } else {
                // Shows the first section by adding 'visible' and removing 'hidden'
                firstSection.classList.add("visible");
                firstSection.classList.remove("hidden");
            }
        });
    }, { threshold: 0.1 }); // Triggers when 10% of the third section is visible

    // Starts observing the third section for intersection changes
    observer.observe(thirdSection);
});

// Select all input elements inside the .rating class and loop over each one
document.querySelectorAll('.rating input').forEach(star => {
  // Add an event listener to each radio input for when its value changes (i.e., when a star is selected)
  star.addEventListener('change', function() {
    
    // Once a star is selected, change the text content of the element with id 'rating-header'
    document.getElementById('rating-header').textContent = "Thanks for supporting this website.";
  });
});
