// Function to fetch a text file
async function fetchTextFile(filename) {
    const response = await fetch(filename);
    const text = await response.text();
    return text;
}

// Function to create a text button
function createTextButton(textFileName) {
    const button = document.createElement('button');
    button.textContent = textFileName;
    button.addEventListener('click', () => loadTextContent(textFileName));
    return button;
}

// Function to display text content in the overlay
function loadTextContent(textFileName) {
    const overlay = document.querySelector('.overlay');
    const textContainer = document.querySelector('.text-container');
    const backButton = document.getElementById('backButton');

    const textContent = fetchTextFile(textFileName);

    textContent.then((text) => {
        textContainer.innerHTML = `<pre>${text}</pre>`;
        overlay.classList.add('active');
        textContainer.classList.add('active');
        backButton.style.display = 'block'; // Show the back button
    });
}

// Get references to elements
const logoutButton = document.getElementById('logoutButton');
const textButtonsContainer = document.querySelector('.text-buttons');
const overlay = document.querySelector('.overlay');
const backButton = document.getElementById('backButton');
const searchInput = document.getElementById('searchInput');
const textContainer = document.querySelector('.text-container');

// Load text buttons
const textFiles = [
    "txts/cancer.txt",
    "file2.txt",
    "file3.txt"
];

textFiles.forEach((textFile) => {
    const textButton = createTextButton(textFile);
    textButtonsContainer.appendChild(textButton);
});

// Handle logout button click
logoutButton.addEventListener('click', () => {
    // Clear the session token cookie
    document.cookie = 'sessionToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // Redirect to the login page
    window.location.href = 'index.html';
});

// Back button functionality
backButton.addEventListener('click', () => {
    overlay.classList.remove('active');
    textContainer.classList.remove('active');
    backButton.style.display = 'none';
});
