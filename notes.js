const textList = [
    '\txts\cancer.txt',
    'text2.txt',
    'text3.txt'
];

const textListContainer = document.querySelector('.text-list');
const textOverlay = document.querySelector('.text-overlay');
const textContent = document.querySelector('.text-content');
const backButton = document.querySelector('.back-button');

// Load text bars
textList.forEach((text, index) => {
    const textBar = document.createElement('div');
    textBar.classList.add('text-bar');
    textBar.textContent = `Text ${index + 1}`;
    textBar.addEventListener('click', () => openTextOverlay(text));
    textListContainer.appendChild(textBar);
});

// Open text overlay
function openTextOverlay(text) {
    fetch(text)
        .then(response => response.text())
        .then(content => {
            textContent.textContent = content;
            textOverlay.style.display = 'flex';
        });
}

// Close text overlay
backButton.addEventListener('click', () => {
    textOverlay.style.display = 'none';
});

