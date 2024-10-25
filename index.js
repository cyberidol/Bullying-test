// Function to toggle the visibility of the menu and change the menu icon
function toggleMenu() {
    // Selects all the submenu buttons
    var menuButtons = document.querySelectorAll('.submenu-btn');
    // Selects the main menu button
    var menuIcon = document.querySelector('.menu-btn');
    // Selects the form container for the complaint form
    var formContainer = document.querySelector('.form-container');
    // Selects the circle background element
    var circleBackground = document.querySelector('.circle-background');
    
    
    
    // Checks if the window width is between 800 and 1000 pixels
    if (window.innerWidth > 800 && window.innerWidth <= 1000) {
        
        // If the menu icon is (☰), change it to a close icon (×)
        if (menuIcon.textContent === "☰") {
            menuIcon.textContent = "×";
            menuIcon.style.fontSize = "72px";

            // Expands the circle background
            circleBackground.classList.add('expanded');

            // Shows each submenu button with an animation
            menuButtons.forEach(function(button) {
            button.style.display = 'block';
            setTimeout(function() {
                button.classList.add('show');  
            }, 10);
        });
        } else {
            // Changes the menu icon back to (☰)
            menuIcon.textContent = "☰";
            menuIcon.style.fontSize = "60px";
            // Hides the form
            formContainer.style.display = 'none';
            // Shrinks the circle background
            circleBackground.classList.remove('expanded');

            // Hides each submenu button with a delay for the animation
            menuButtons.forEach(function(button) {
                button.classList.remove('show'); 
        setTimeout(function() {
            button.style.display = 'none'; 
        }, 600);
        });
            
            // Ensures the blue button is displayed again
            document.querySelector('.blue-btn').style.display = 'block';
            
            
        
        }
    } else {
    // For window sizes outside of the 800-1000 pixel range
    if (menuIcon.textContent === "☰") {
        menuIcon.textContent = "×";
        menuIcon.style.fontSize = "72px";
        // Shows the submenu buttons
        menuButtons.forEach(function(button) {
            button.style.display = 'block';
            setTimeout(function() {
                button.classList.add('show');  
            }, 10);
        });
    } else {
        // Resets the menu icon to (☰)
        menuIcon.textContent = "☰";
        menuIcon.style.fontSize = "60px";
        // Hides the form
        formContainer.style.display = 'none';
        // Hides the submenu buttons
        menuButtons.forEach(function(button) {
            button.classList.remove('show'); 
        setTimeout(function() {
            button.style.display = 'none'; 
        }, 600);
        });
        
        // Displays the blue "Get Help" button again
        document.querySelector('.blue-btn').style.display = 'block';

        
    }
    
 }
}

// Function to display the form and hide the menu buttons
function goToTable() {
    // Tracks the form visibility state
    isFormVisible = true;

    // Hides the submenu buttons
    var menuButtons = document.querySelectorAll('.submenu-btn');
    var circleBackground = document.querySelector('.circle-background');
    
    menuButtons.forEach(function(button) {
        button.style.display = 'none';
    });
    
    // Hides the blue button
    document.querySelector('.blue-btn').style.display = 'none';

    // Changes the menu icon to a close (×) symbol
    var menuIcon = document.querySelector('.menu-btn');
    menuIcon.textContent = "×";
    menuIcon.style.fontSize = "72px";
    
    // Displays the form container
    document.querySelector('.form-container').style.display = 'flex';
    
    // Shrinks the circle background if expanded
    circleBackground.classList.remove('expanded');

    // Resets the onclick event for the menu button
    document.querySelector('.menu-btn').onclick = toggleMenu;
    document.querySelector('.form-container').style.display = 'block';
}
    

// Function to hide the form
function hideForm() {
    isFormVisible = false;
    document.querySelector('.form-container').style.display = 'none';
}

// Function to reset the menu icon back to (☰)
function resetMenu() {
    var menuIcon = document.querySelector('.menu-btn');
    menuIcon.textContent = "☰";
    menuIcon.style.fontSize = "60px";
    document.querySelector('.menu-btn').onclick = toggleMenu;
}