document.addEventListener("DOMContentLoaded", function() {
    const pdfContainer = document.querySelector(".pdf-container");
    const loadPdf1Button = document.getElementById("loadPdf1");
    const loadPdf2Button = document.getElementById("loadPdf2");

    loadPdf1Button.addEventListener("click", function() {
        pdfContainer.innerHTML = `<iframe src="9473128851463894736473964732985736437571246713941237539846374983126478129.pdf" class="pdf-iframe" frameborder="0"></iframe>`;
        pdfContainer.classList.add("active");
     });

    loadPdf2Button.addEventListener("click", function() {
        pdfContainer.innerHTML = `<iframe src="8321658250125357385934724301243817438567105836409371847317563.pdf" class="pdf-iframe" frameborder="0"></iframe>`;
        pdfContainer.classList.add("active");
      });
});
