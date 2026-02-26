let currentPage = 1;
const totalPages = 3;
const flipSound = document.getElementById("flipSound");

function nextPage() {
    if (currentPage > totalPages) return;

    const page = document.getElementById("page" + currentPage);
    page.style.transform = "rotateY(-180deg)";
    flipSound.play();
    currentPage++;
}

function prevPage() {
    if (currentPage <= 1) return;

    currentPage--;
    const page = document.getElementById("page" + currentPage);
    page.style.transform = "rotateY(0deg)";
    flipSound.play();
}