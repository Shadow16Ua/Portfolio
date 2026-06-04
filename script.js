const themeSwitch = document.getElementById('theme-switch');
let currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
}

themeSwitch.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        currentTheme = 'light';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
    }
});

const translations = {
    en: {
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_contact: "Contact",
        label_portfolio: "Portfolio",
        status_open: "🚀 Open to Work & Internships",
        about_text: "Computer science student at DSW IDEIS with hands-on experience in Java, C#, Python, and web development. I build Minecraft mods, Discord bots, and websites — mostly for fun, always learning something new. Sometimes I use AI tools (ChatGPT, Gemini, Claude) as part of my workflow — not just to generate code, but to understand, debug, and improve it.",
        btn_email: "Email",
        skill_web: "responsive design", skill_java: "Minecraft modding", skill_cs: "university coursework", skill_py: "Discord bots", skill_sql: "basics", skill_git: "version control", skill_ai: "ChatGPT, Gemini, Claude",
        proj_bank: "C# bank vault management system with LINQ data processing and 100% unit test coverage.",
        proj_afterlight: "Website for a Minecraft server. Custom design, navigation, server IP copy and online counter.",
        proj_tense: "Interactive platform for learning English grammar tenses with quizzes.",
        proj_markt: "Dynamic website integrated with an online database for real-time data.",
        proj_alert: "Python bot for Discord that sends air raid alerts via button interactions.",
        proj_mods: "8 published mods, datapacks and resource packs with 1,100+ total downloads. Includes Safe Pets, Lava Detector and more.",
        footer_tagline: "Let's build something awesome together."
    },
    uk: {
        nav_about: "Про мене", nav_skills: "Навички", nav_projects: "Проєкти", nav_contact: "Контакти",
        label_portfolio: "Портфоліо",
        status_open: "🚀 Відкритий до роботи та стажувань",
        about_text: "Студент прикладної інформатики в DSW IDEIS з практичним досвідом у Java, C#, Python та веб-розробці. Створюю моди для Minecraft, Discord ботів та сайти — переважно для задоволення та постійного вивчення нового. Використовую ШІ (ChatGPT, Gemini, Claude) у своїй роботі не просто для генерації коду, а для його розуміння, дебагінгу та покращення.",
        btn_email: "Написати",
        skill_web: "адаптивний дизайн", skill_java: "моди для Minecraft", skill_cs: "університетські проєкти", skill_py: "Discord боти", skill_sql: "базовий рівень", skill_git: "контроль версій", skill_ai: "ChatGPT, Gemini, Claude",
        proj_bank: "Система управління банківським сховищем на C# з обробкою даних через LINQ та 100% покриттям unit-тестами.",
        proj_afterlight: "Сайт для сервера Minecraft. Кастомний дизайн, навігація, копіювання IP та лічильник онлайну.",
        proj_tense: "Інтерактивна платформа для вивчення часів англійської граматики з тестами.",
        proj_markt: "Динамічний сайт, інтегрований з онлайн-базою для роботи з даними в реальному часі.",
        proj_alert: "Python-бот для Discord, який надсилає сповіщення про повітряну тривогу через взаємодію з кнопками.",
        proj_mods: "8 опублікованих модів, датапаків та ресурспаків із 1100+ завантаженнями. Включає Safe Pets, Lava Detector тощо.",
        footer_tagline: "Створимо щось круте разом."
    },
    pl: {
        nav_about: "O mnie", nav_skills: "Umiejętności", nav_projects: "Projekty", nav_contact: "Kontakt",
        label_portfolio: "Portfolio",
        status_open: "🚀 Otwarty na pracę i staże",
        about_text: "Student informatyki stosowanej na DSW IDEIS z praktycznym doświadczeniem w Javie, C#, Pythonie i tworzeniu stron WWW. Tworzę mody do Minecrafta, boty na Discorda i strony internetowe. Czasami używam narzędzi AI (ChatGPT, Gemini, Claude) nie tylko do generowania kodu, ale także do jego analizy, debugowania i ulepszania.",
        btn_email: "Napisz",
        skill_web: "responsywny design", skill_java: "tworzenie modów", skill_cs: "projekty na uczelnię", skill_py: "boty na Discorda", skill_sql: "podstawy", skill_git: "kontrola wersji", skill_ai: "ChatGPT, Gemini, Claude",
        proj_bank: "System zarządzania skarbcem bankowym w C# z przetwarzaniem danych LINQ i 100% pokryciem testami jednostkowymi.",
        proj_afterlight: "Strona dla serwera Minecraft. Niestandardowy projekt, kopiowanie IP i licznik graczy online.",
        proj_tense: "Interaktywna platforma do nauki czasów w gramatyce angielskiej z quizami.",
        proj_markt: "Dynamiczna strona internetowa zintegrowana z bazą danych online.",
        proj_alert: "Bot w Pythonie na Discorda wysyłający alarmy przeciwlotnicze poprzez interakcje z przyciskami.",
        proj_mods: "8 opublikowanych modów z ponad 1100 pobraniami (w tym m.in. Safe Pets).",
        footer_tagline: "Stwórzmy coś niesamowitego razem."
    }
};

const savedLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-value') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('language', lang);
}

updateLanguage(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        updateLanguage(e.target.getAttribute('data-value'));
    });
});

const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = window.innerWidth < 600 ? 40 : 80;

let mouse = { x: null, y: null, radius: 100 };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size < 0.2) this.size += 0.1;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                this.x -= forceDirectionX * force * 1;
                this.y -= forceDirectionY * force * 1;
            }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.2)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                let opacity = 1 - (distance / 120);
                ctx.strokeStyle = currentTheme === 'dark' ? `rgba(255, 255, 255, ${opacity * 0.2})` : `rgba(0, 0, 0, ${opacity * 0.1})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();