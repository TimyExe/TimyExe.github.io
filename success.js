// Check if the user is logged in
const isLoggedIn = /* Check if user is logged in */ true;

// Get references to elements
const overlay = document.getElementById('overlay');
const logoutButton = document.getElementById('logoutButton');

// Show the overlay if logged in
if (isLoggedIn) {
    overlay.style.display = 'block';
}

// Handle logout button click
logoutButton.addEventListener('click', () => {
    // Perform logout actions if needed
    // For this example, let's redirect back to the login page
    window.location.href = 'index.html';
});
