document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulated authentication (replace this with actual authentication logic)
    if (username.toLowerCase() == 'tim' && password === 'password1') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user1Token; path=/;';

        // Redirect to the success page
        window.location.href = '/main/main.html';
    } else if (username.toLowerCase() == 'akki' && password === 'ilovemonkeys') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user2Token; path=/;';

        // Redirect to the success page
        window.location.href = '/main/main.html';
    }else if (username.toLowerCase() == 'villads' && password === 'villadsismonkey') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user2Token; path=/;';

        // Redirect to the success page
        window.location.href = '/main/main.html';
    } else if (username.toLowerCase() == 'other' && password === 'iliketohavesexwithmonkeys') {
        // Set a session token cookie
        document.cookie = 'sessionToken=user3Token; path=/;';

        // Redirect to the success page
        window.location.href = '/main/main.html';
    } else {
        alert('Invalid username or password');
    }
});
