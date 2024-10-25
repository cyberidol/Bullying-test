// Variable to keep track of the currently opened description
let currentOpen = null;

// Function to toggle the visibility of a description
function toggleDescription(id) {
    
    // Get the description element by concatenating 'description' with the id
    const description = document.getElementById('description' + id);

    // Check if the clicked description is the same as the currently open one
    if (currentOpen === description) {
        // If it is, hide it by removing the 'show' class
        description.classList.remove('show');
        // Reset currentOpen to null since no description is open now
        currentOpen = null;
    } else {
        // If another description is already open, hide it
        if (currentOpen) {
            currentOpen.classList.remove('show');
        }
        
        // Show the newly clicked description by adding the 'show' class
        description.classList.add('show');
        // Set the newly opened description as the current open one
        currentOpen = description;
    }
}