document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in (simulated using a cookie)
    const isLoggedIn = document.cookie.includes("sessionToken");

    if (!isLoggedIn) {
        window.location.href = "index.html"; // Redirect to the login page
    }
