(function () {
    const DEFAULT_LANG = "ru";
    const STORAGE_KEY = "fttrade-lang";
    const LANG_JSON_URL = "scripts/lang.json";
    const HTML_LANG_MAP = {
        ru: "ru",
        en: "en",
        am: "hy"
    };

    let translations = {};
    let currentLang = DEFAULT_LANG;

    function normalizeLang(lang) {
        if (!lang) {
            return DEFAULT_LANG;
        }

        const normalized = String(lang).toLowerCase();
        return translations[normalized] ? normalized : DEFAULT_LANG;
    }

    function getInitialLang() {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get("lang");
        if (urlLang && translations[urlLang.toLowerCase()]) {
            return urlLang.toLowerCase();
        }

        const storedLang = localStorage.getItem(STORAGE_KEY);
        if (storedLang && translations[storedLang]) {
            return storedLang;
        }

        return DEFAULT_LANG;
    }

    function applyInstruction(element, instruction, value) {
        const attrMatch = instruction.match(/^\[([^\]]+)\](.+)$/);

        if (!attrMatch) {
            element.textContent = value;
            return;
        }

        const attr = attrMatch[1];
        if (attr === "text") {
            element.textContent = value;
            return;
        }

        if (attr === "html") {
            element.innerHTML = value;
            return;
        }

        element.setAttribute(attr, value);
    }

    function applyTranslations(lang) {
        const dictionary = translations[lang] || translations[DEFAULT_LANG];
        if (!dictionary) {
            return;
        }

        document.documentElement.lang = HTML_LANG_MAP[lang] || lang;

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const instructions = element.getAttribute("data-i18n").split(";");

            instructions.forEach((rawInstruction) => {
                const instruction = rawInstruction.trim();
                const key = instruction.replace(/^\[[^\]]+\]/, "");
                const value = dictionary[key];

                if (typeof value !== "string") {
                    return;
                }

                applyInstruction(element, instruction, value);
            });
        });

        document.querySelectorAll("[data-set-lang]").forEach((control) => {
            const isActive = control.getAttribute("data-set-lang") === lang;
            control.classList.toggle("active", isActive);
            control.setAttribute("aria-current", isActive ? "true" : "false");
        });

        currentLang = lang;
        localStorage.setItem(STORAGE_KEY, lang);
        window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
    }

    function setLang(lang, options = {}) {
        const nextLang = normalizeLang(lang);
        applyTranslations(nextLang);

        if (options.updateUrl) {
            const url = new URL(window.location.href);
            url.searchParams.set("lang", nextLang);
            window.history.replaceState({}, "", url);
        }
    }

    function bindLanguageSwitcher() {
        document.querySelectorAll("[data-set-lang]").forEach((control) => {
            control.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                setLang(control.getAttribute("data-set-lang"), { updateUrl: true });
                control.closest(".lang-dropdown")?.classList.remove("active");
            });
        });
    }

    async function initI18n() {
        try {
            const response = await fetch(LANG_JSON_URL, { cache: "no-cache" });
            if (!response.ok) {
                throw new Error(`Failed to load ${LANG_JSON_URL}`);
            }

            translations = await response.json();
            currentLang = getInitialLang();
            bindLanguageSwitcher();
            applyTranslations(currentLang);
        } catch (error) {
            console.error("Translation initialization failed:", error);
        }
    }

    window.i18n = {
        applyTranslations: () => applyTranslations(currentLang),
        getLang: () => currentLang,
        setLang
    };

    window.addEventListener("i18n:apply", () => applyTranslations(currentLang));
    document.addEventListener("DOMContentLoaded", initI18n);
})();
