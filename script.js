//Java Script Here 

// Год в футере
document.addEventListener("DOMContentLoaded", ()=> {
    const year = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
});

// Модальное окно
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-form");
    const overlay = document.getElementById("overlay");
    const openModalButton = document.querySelector(".header__form");
    const closeModalButton = document.querySelector(".close-modal");

    openModalButton.addEventListener("click", () => {
        modal.classList.add("show");
        overlay.classList.add("show");
    });

    closeModalButton.addEventListener("click", () => {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("show");
        overlay.classList.remove("show");
    });
});
