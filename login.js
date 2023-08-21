document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace this with actual authentication logic)
    if (username === 'yourUsername' && password === 'yourPassword') {
        // Set a session token cookie
        document.cookie = 'sessionToken=yourSessionToken; path=/;';

        // Redirect to the success page
        window.location.href = 'success.html';
    } else {
        alert('Invalid username or password');
    }
});
