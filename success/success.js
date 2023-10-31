document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in (simulated using a cookie)
   

    const cardsContainer = document.querySelector(".cards-container");
    const pdfContainer = document.querySelector(".pdf-container");
    const pdfIframe = document.getElementById("pdfIframe");
    const backButton = document.getElementById("backButton");

    const pdfPaths = [
        "9473128851463894736473964732985736437571246713941237539846374983126478129.pdf",
        "8321658250125357385934724301243817438567105836409371847317563.pdf",
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
