document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace 'passwords.txt' with the path to your password file
    fetch('passwords.txt')
        .then(response => response.text())
        .then(passwords => {
            const passwordList = passwords.split('\n');
            for (let i = 0; i < passwordList.length; i++) {
                const [storedUsername, storedPassword] = passwordList[i].split(':');
                if (username === storedUsername && password === storedPassword) {
                    window.location.href = 'success.html'; // Redirect to success page
                    return;
                }
            }
            alert('Invalid username or password');
        });
});
