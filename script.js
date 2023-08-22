document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const pdfIframeContainer = document.getElementById("pdfIframeContainer");
    const backButton = document.getElementById("backButton");

    const pdfPaths = {
        card1: "9473128851463894736473964732985736437571246713941237539846374983126478129.pdf",
        card2: "8321658250125357385934724301243817438567105836409371847317563.pdf",
        card3: "path/to/pdf3.pdf"
    };

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const cardId = card.id;
            const pdfSrc = pdfPaths[cardId];
            if (pdfSrc) {
                pdfIframeContainer.innerHTML = `<iframe src="${pdfSrc}" frameborder="0"></iframe>`;
                pdfIframeContainer.classList.add("active");
            }
        });
    });

    backButton.addEventListener("click", function() {
        pdfIframeContainer.innerHTML = "";
        pdfIframeContainer.classList.remove("active");
    });
});
