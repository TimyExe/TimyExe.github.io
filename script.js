document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.querySelector(".pdf-container");
    const loadPdf1Button = document.getElementById("loadPdf1");
    const loadPdf2Button = document.getElementById("loadPdf2");

    loadPdf1Button.addEventListener("click", function() {
        pdfContainer.innerHTML = `<iframe src="123.pdf" class="pdf-iframe" frameborder="0"></iframe>`;
    });

    loadPdf2Button.addEventListener("click", function() {
        pdfContainer.innerHTML = `<iframe src="999.pdf" class="pdf-iframe" frameborder="0"></iframe>`;
    });
});
