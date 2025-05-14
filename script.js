
// Год в футере
document.addEventListener("DOMContentLoaded", ()=> {
    const year = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
});

// Модальное окно в header
// Модальное окно в header
document.addEventListener("DOMContentLoaded", () => {
    const modal           = document.getElementById("modal-form");
    const overlay         = document.getElementById("overlay");
    const openModalButton = document.querySelector(".header__form");
    const closeModalButton= document.querySelector(".close-modal");

    // Добавляем ссылки на мобильное меню и бургер
    const nav    = document.querySelector(".header__nav");
    const burger = document.querySelector(".burger");

    openModalButton.addEventListener("click", () => {
      // 1) Закрываем мобильное меню, если оно открыто
        if (nav.classList.contains("header__nav--open")) {
            nav.classList.remove("header__nav--open");
            burger.setAttribute("aria-expanded", "false");
        }
      // 2) Открываем модалку как было
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

// Фастфуд
document.addEventListener('DOMContentLoaded', () => {
    const burger       = document.querySelector('.burger');
    const nav          = document.querySelector('.header__nav');
    const closeNavBtn  = document.querySelector('.nav-close');
    const navLinks     = document.querySelectorAll('.header__page-link');

    // Функция переключения меню
    function toggleNav() {
        const isOpen = burger.getAttribute('aria-expanded') === 'true';
        burger.setAttribute('aria-expanded', String(!isOpen));
        nav.classList.toggle('header__nav--open');
    }

    burger.addEventListener('click', toggleNav);
    closeNavBtn.addEventListener('click', toggleNav);

    // При клике на любую ссылку — тоже закрываем
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('header__nav--open')) {
                toggleNav();
            }
        });
    });
});