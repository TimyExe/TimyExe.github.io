// Check if the user is logged in (simulated using a cookie)
const isLoggedIn = document.cookie.includes('sessionToken');

// Get references to elements
const overlay = document.getElementById('overlay');
const logoutButton = document.getElementById('logoutButton');
const pdfContainer = document.querySelector('.pdf-container');

// Show the overlay if logged in
if (isLoggedIn) {
    overlay.style.display = 'block';
    pdfContainer.style.display = 'block'; // Show the PDF container if logged in
} else {
    overlay.style.display = 'none'; // Hide the overlay if not logged in
    pdfContainer.style.display = 'none'; // Hide the PDF container if not logged in
}

// Handle logout button click
logoutButton.addEventListener('click', () => {
    // Clear the session token cookie
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirect to the login page
    window.location.href = 'index.html';
});
