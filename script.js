document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const pdfIframeContainer = document.getElementById("pdfIframeContainer");
    const pdfIframe = document.getElementById("pdfIframe");
    const backButton = document.getElementById("backButton");

    const pdfPaths = {
        card1: "9473128851463894736473964732985736437571246713941237539846374983126478129.pdf",
        card2: "8321658250125357385934724301243817438567105836409371847317563.pdf",
        card3: "path/to/your_third_pdf.pdf"  // Replace with the actual path
    };

    cards.forEach(card => {
        card.addEventListener("click", function() {document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in (simulated using a cookie)
    const isLoggedIn = document.cookie.includes('sessionToken');

    // Redirect to login page if not logged in
    if (!isLoggedIn) {
        window.location.href = 'index.html'; // Redirect to the login page
    }

    const cards = document.querySelectorAll(".card");
    const pdfIframeContainer = document.getElementById("pdfIframeContainer");
    const pdfIframe = document.getElementById("pdfIframe");
    const backButton = document.getElementById("backButton");

    const pdfPaths = {
        card1: "9473128851463894736473964732985736437571246713941237539846374983126478129.pdf",
        card2: "8321658250125357385934724301243817438567105836409371847317563.pdf",
        card3: "path/to/your_third_pdf.pdf"  // Replace with the actual path
    };

    cards.forEach(card => {
        card.addEventListener("click", function() {
            const cardId = card.id;
            const pdfSrc = pdfPaths[cardId];
            if (pdfSrc) {
                pdfIframe.src = pdfSrc;
                pdfIframeContainer.classList.add("active");
                backButton.style.display = "block"; // Show back button
            }
        });
    });

    backButton.addEventListener("click", function() {
        pdfIframe.src = "";
        pdfIframeContainer.classList.remove("active");
        backButton.style.display = "none"; // Hide back button
    });
});

            const cardId = card.id;
            const pdfSrc = pdfPaths[cardId];
            if (pdfSrc) {
                pdfIframe.src = pdfSrc;
                pdfIframeContainer.classList.add("active");
            }
        });
    });

    backButton.addEventListener("click", function() {
        pdfIframe.src = "";
        pdfIframeContainer.classList.remove("active");
    });
});
