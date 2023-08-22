document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in (simulated using a cookie)
    const isLoggedIn = document.cookie.includes("sessionToken");

    if (!isLoggedIn) {
        window.location.href = "index.html"; // Redirect to the login page
    }

    const cardsContainer = document.querySelector(".cards-container");
    const pdfContainer = document.querySelector(".pdf-container");
    const pdfIframe = document.getElementById("pdfIframe");
    const backButton = document.getElementById("backButton");

    const pdfPaths = [
        "path/to/pdf1.pdf",
        "path/to/pdf2.pdf",
        "path/to/pdf3.pdf"
        // Add more PDF paths as needed
    ];

    function createCard(imgSrc, pdfSrc) {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Card Image";
        card.appendChild(img);

        card.addEventListener("click", function() {
            pdfIframe.src = pdfSrc;
            pdfContainer.classList.add("active");
            backButton.style.display = "block";
        });

        return card;
    }

    pdfContainer.addEventListener("click", function() {
        pdfIframe.src = "";
        pdfContainer.classList.remove("active");
        backButton.style.display = "none";
    });

    for (let i = 1; i <= pdfPaths.length; i++) {
        const card = createCard(`icon${i}.jpg`, pdfPaths[i - 1]);
        cardsContainer.appendChild(card);
    }
});
