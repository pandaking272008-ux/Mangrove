const images = [
    "image/map.png",
    "image/Interview.png",
    "image/Airsample1.png",
    "image/Airsample2.png",
    "image/Airsample3.png",
    "image/Airsample4.png",
    "image/Airsample5.png",
    "image/Airsample6.png",
    "image/Processing.png",
    "image/Watersample1.png",
    "image/Watersample2.png",
    "image/Ecobag.png",
    "image/Planting.png"
];

function changeImage(index, element) {
    const mainImage = document.getElementById("mainImage");

    mainImage.src = images[index];

    document
        .querySelectorAll(".feature-list li")
        .forEach(item => item.classList.remove("active"));

    element.classList.add("active");
}

function openModal() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const mainImage = document.getElementById("mainImage");

    modalImage.src = mainImage.src;
    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.remove("show");
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("imageModal");

    if (event.target === modal) {
        closeModal();
    }
});