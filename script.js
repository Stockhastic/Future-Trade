// Год в футере
document.addEventListener("DOMContentLoaded", ()=> {
    const year = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = year;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const backer = document.querySelector(".backer");
    if (!backer) {
        return;
    }

    const showAfter = 500;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = null;
    let isTicking = false;

    function setBackerVisibility(visible) {
        if (visible === isVisible) {
            return;
        }

        isVisible = visible;
        backer.classList.toggle("backer--visible", visible);
        backer.setAttribute("aria-hidden", visible ? "false" : "true");
        backer.tabIndex = visible ? 0 : -1;
    }

    function updateBacker() {
        setBackerVisibility(window.scrollY > showAfter);
        isTicking = false;
    }

    window.addEventListener("scroll", () => {
        if (!isTicking) {
            window.requestAnimationFrame(updateBacker);
            isTicking = true;
        }
    }, { passive: true });

    backer.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: reduceMotion.matches ? "auto" : "smooth"
        });
    });

    setBackerVisibility(false);
    updateBacker();
});

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
        if (nav && burger && nav.classList.contains("header__nav--open")) {
            nav.classList.remove("header__nav--open");
            burger.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
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
    const desktopQuery = window.matchMedia('(min-width: 1281px)');

    if (!burger || !nav) {
        return;
    }

    // Функция переключения меню
    function openNav() {
        burger.setAttribute('aria-expanded', 'true');
        nav.classList.add('header__nav--open');
        document.body.style.overflow = 'hidden';
    }

    function closeNav(returnFocus = false) {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('header__nav--open');
        document.body.style.overflow = '';

        if (returnFocus) {
            burger.focus();
        }
    }

    function toggleNav() {
        if (burger.getAttribute('aria-expanded') === 'true') {
            closeNav();
        } else {
            openNav();
        }
    }

    burger.addEventListener('click', toggleNav);
    if (closeNavBtn) {
        closeNavBtn.addEventListener('click', () => closeNav(true));
    }

    // При клике на любую ссылку — тоже закрываем
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('header__nav--open')) {
                closeNav();
            }
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && nav.classList.contains('header__nav--open')) {
            closeNav(true);
        }
    });

    desktopQuery.addEventListener('change', event => {
        if (event.matches && nav.classList.contains('header__nav--open')) {
            closeNav();
        }
    });
});

// Анимашки появления с interspector
const elements = document.querySelectorAll('.hidden');
const elements2 = document.querySelectorAll('.hidden-2');
const elements3 = document.querySelectorAll('.hidden-3');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
        }
    });
},
{ threshold: 0.05 });

elements.forEach(el => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-2');
            observer2.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.05 });

elements2.forEach(el => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('visible-3');
            observer3.unobserve(entry.target);
        }, index * 200);
        }
    });
},
{ threshold: 0.05 });

elements3.forEach(el => observer3.observe(el));

// Трекеры для составной формы
document.querySelectorAll('form input, form textarea').forEach(el => {
    el.addEventListener('input', () => {
        if (typeof ym === 'function') {
            ym(101927491, 'reachGoal', 'form_start');
        }
    }, { once: true });
});

document.querySelectorAll('form[action="send-form.php"]').forEach(form => {
    form.addEventListener('submit', () => {
        const info = collectClientData();
        const formData = new FormData(form);
        const sourceLabel = form.getAttribute('data-telegram-label')
            || (form.classList.contains('modal-form') ? 'в модальной форме сайта' :
                form.classList.contains('feedback-block__form') ? 'в блоке контакты' :
                'Форма отправки');

        const baseMessage = buildMessage(info, '📨 Заявка с формы', sourceLabel);

        const fullNameRaw = (formData.get('full_name') || '').trim();
        const phoneRaw = (formData.get('phone') || '').trim();
        const emailRaw = (formData.get('email') || '').trim();
        const commentRaw = (formData.get('message') || '').trim();

        const fullName = escapeHtml(fullNameRaw || '—');
        const phone = escapeHtml(phoneRaw || '—');
        const email = emailRaw !== '' ? escapeHtml(emailRaw) : 'Не указан';
        const comment = commentRaw !== '' ? `\n<b>Комментарий:</b> ${escapeHtml(commentRaw)}` : '';

        const message = `${baseMessage}

👋 <b>ФИО:</b> ${fullName}
📞 <b>Телефон для связи:</b> ${phone}
📥 <b>E-mail:</b> ${email}${comment}`;

        const params = new URLSearchParams({ message });
        let delivered = false;
        if (navigator.sendBeacon) {
            const blob = new Blob([params.toString()], { type: 'application/x-www-form-urlencoded' });
            delivered = navigator.sendBeacon('notify.php', blob);
        }

        if (!delivered) {
            fetch('notify.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params
            }).catch(err => console.error('Failed to notify Telegram:', err));
        }

        if (typeof ym === 'function') {
            const goal = form.classList.contains('modal-form')
                ? 'form_submit_header'
                : form.classList.contains('feedback-block__form')
                    ? 'form_submit_feedback'
                    : null;

            if (goal) {
                try {
                    ym(101927491, 'reachGoal', goal);
                } catch (error) {
                    console.warn('Metrica goal error:', error);
                }
            }
        }
    });
});


// TG Bot сбор данных и отправка
function collectClientData() {
    const now = new Date();
    return {
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }),
        device: /Mobi|Android/i.test(navigator.userAgent) ? 'Мобильное' : 'Десктоп',
        screen: `${window.innerWidth}px`,
        lang: (navigator.language || navigator.userLanguage).toUpperCase(),
        userAgent: navigator.userAgent.replace(/</g, '&lt;').replace(/>/g, '&gt;').slice(0, 400),
        utm: {
            source: new URLSearchParams(window.location.search).get('utm_source') || 'Нет данных о метке',
            medium: new URLSearchParams(window.location.search).get('utm_medium') || 'Нет данных о метке',
            campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'Нет данных о метке'
        }
    };
}
function escapeHtml(value) {
    return value.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function buildMessage(info, label, value) {
    return `${label} <b>${value}</b> на сайте <b>Future Trade!</b>

📅 <b>Дата:</b> ${info.date}
🕒 <b>Время:</b> ${info.time}
📱 <b>Устройство:</b> ${info.device}
🖥 <b>Ширина экрана:</b> ${info.screen}
🌍 <b>Язык браузера:</b> ${info.lang}

🔗 <b>UTM Source:</b> ${info.utm.source}
🔗 <b>UTM Medium:</b> ${info.utm.medium}
🔗 <b>UTM Campaign:</b> ${info.utm.campaign}

🧠 <b>Браузер:</b>
<code>${info.userAgent}</code>`;
}

document.querySelectorAll('.messenger-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const messengerName = this.dataset.messenger;
        const info = collectClientData();
        const message = buildMessage(info, '🔔 Переход в', messengerName);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            window.location.href = this.href;
        })
        .catch(error => console.error('Ошибка:', error));
    });
});
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const phoneNumber = this.getAttribute('href').replace('tel:', '');
        const info = collectClientData();
        const message = buildMessage(info, '📞 Клик по телефону:', phoneNumber);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        });
    });
});
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const emailAddress = this.getAttribute('href').replace('mailto:', '');
        const info = collectClientData();
        const message = buildMessage(info, '✉️ Клик по почте:', emailAddress);

        fetch('notify.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({message})
        });
    });
});

// Переключатель языка
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (!dropdown) {
        return;
    }

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // чтобы не сработал document click
        dropdown.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
    // если клик вне дропдауна — закрываем
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });
});
