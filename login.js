document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulated authentication (replace this with actual authentication logic)
    if (username === 'user1' && password === 'password1') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user1Token; path=/;';

        // Redirect to the success page
        window.location.href = 'success.html';
    } else if (username === 'user2' && password === 'password2') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user2Token; path=/;';

        // Redirect to the success page
        window.location.href = 'success.html';
    } else if (username === 'user3' && password === 'password3') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user3Token; path=/;';

        // Redirect to the success page
        window.location.href = 'success.html';
    } else {
        alert('Invalid username or password');
    }
});
