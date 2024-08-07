document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('img');

    textElements.forEach(textElement => {
        textElement.addEventListener('click', function () {
            const card = textElement.closest('.card_new-cup');
            card.classList.add('rotate_new-cup');
        });

        textElement.addEventListener('mouseout', function () {
            const card = textElement.closest('.card_new-cup');
            card.classList.remove('rotate_new-cup');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const colorButtons = document.querySelectorAll(".color-btn_new-cup");
    const cupImage = document.getElementById("cup-image_new-cup");

    colorButtons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");
            cupImage.src = `assets/cup_${color}.png`; // Ensure your image files are named accordingly
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".cup-image");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("hidden", i !== index);
        });
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    showImage(currentIndex); // Initialize
});
