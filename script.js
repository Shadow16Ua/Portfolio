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
        nav_about: "About", nav_projects: "Projects", nav_contact: "Contact", nav_skills: "Tech Stack", nav_edu: "Goals",
        label_portfolio: "Portfolio",
        status_open: "🚀 Open to Work & Internships",
        btn_contacts: "📬 Contacts & Other links",
        about_text: "Computer science student at DSW IDEIS with hands-on experience in Java, C#, Python, and web development. I build Minecraft mods, Discord bots, and websites — mostly for fun, always learning something new. Sometimes I use AI tools (ChatGPT, Gemini, Claude) as part of my workflow — not just to generate code, but to understand, debug, and improve it.",
        skill_git: "GitHub",
        edu_uni: "DSW IDEIS, Krakow",
        edu_date: "2025 — Present",
        edu_degree: "Applied Informatics (Informatyka Stosowana) — 1st Year",
        edu_goal: "As a student of Applied Informatics, I am focused on bridging theoretical knowledge with practical challenges. I am currently seeking an internship or a Junior Developer position where I can contribute to meaningful projects, solve complex technical problems, and further develop my skills. I am highly motivated to deliver tangible results, gain hands-on professional experience, and demonstrate my dedication to high-standard engineering."        proj_bank: "C# bank vault management system with LINQ data processing and 100% unit test coverage.",
        proj_afterlight: "Website for a Minecraft server. Custom design, navigation, server IP copy and online counter.",
        proj_tense: "Interactive platform for learning English grammar tenses with quizzes.",
        proj_markt: "Dynamic website integrated with an online database for real-time data.",
        proj_alert: "Python bot for Discord that sends air raid alerts via button interactions.",
        proj_mods: "8 published mods, datapacks and resource packs with 1,100+ total downloads. Includes Safe Pets, Lava Detector and more.",
        footer_tagline: "Let's build something awesome together."
    },
    uk: {
        nav_about: "Про мене", nav_projects: "Проєкти", nav_contact: "Контакти", nav_skills: "Стек технологій", nav_edu: "Цілі",
        label_portfolio: "Портфоліо",
        status_open: "🚀 Відкритий до роботи та стажувань",
        btn_contacts: "📬 Контакти та інші посилання",
        about_text: "Студент прикладної інформатики в DSW IDEIS з практичним досвідом у Java, C#, Python та веб-розробці. Створюю моди для Minecraft, Discord ботів та сайти — переважно для задоволення та постійного вивчення нового. Використовую ШІ (ChatGPT, Gemini, Claude) у своїй роботі не просто для генерації коду, а для його розуміння, дебагінгу та покращення.",
        skill_git: "GitHub",
        edu_uni: "DSW IDEIS, Краків",
        edu_date: "2025 — Поточний час",
        edu_degree: "Прикладна інформатика (Informatyka Stosowana) — 1 курс",
        edu_goal: "Як студент прикладної інформатики, я зосереджений на інтеграції теоретичних знань із реальними бізнес-завданнями. Зараз я шукаю стажування або позицію Junior-розробника, де зможу робити вагомий внесок у проєкти, розв'язувати складні технічні задачі та професійно зростати. Моя мета — приносити користь команді, отримувати практичний досвід та дотримуватися високих стандартів розробки."        proj_bank: "Система управління банківским сховищем на C# з обробкою даних через LINQ та 100% покриттям unit-тестами.",
        proj_afterlight: "Сайт для сервера Minecraft. Кастомний дизайн, навігація, копіювання IP та лічильник онлайну.",
        proj_tense: "Інтерактивна платформа для вивчення часів англійської граматики з тестами.",
        proj_markt: "Динамічний сайт, інтегрований з онлайн-базою для роботи з даними в реальному часі.",
        proj_alert: "Python-бот для Discord, який надсилає сповіщення про повітряну тривогу через взаємодію з кнопками.",
        proj_mods: "8 опублікованих модів, датапаків та ресурспаків із 1100+ завантаженнями. Включає Safe Pets, Lava Detector тощо.",
        footer_tagline: "Створимо щось круте разом."
    },
    pl: {
        nav_about: "O mnie", nav_projects: "Projekty", nav_contact: "Kontakt", nav_skills: "Stack technologiczny", nav_edu: "Cele",
        label_portfolio: "Portfolio",
        status_open: "🚀 Otwarty na pracę i staże",
        btn_contacts: "📬 Kontakty i inne linki",
        about_text: "Student informatyki stosowanej na DSW IDEIS z praktycznym doświadczeniem w Javie, C#, Pythonie i tworzeniu stron WWW. Tworzę mody do Minecrafta, boty na Discorda i strony internetowe. Czasami używam narzędzi AI (ChatGPT, Gemini, Claude) nie tylko do generowania kodu, ale także do jego analizy, debugowania i ulepszania.",
        skill_git: "GitHub",
        edu_uni: "DSW IDEIS, Kraków",
        edu_date: "2025 — Obecnie",
        edu_degree: "Informatyka Stosowana — 1. rok",
        edu_goal: "Jako student informatyki stosowanej skupiam się na łączeniu wiedzy teoretycznej z wyzwaniami praktycznymi. Aktywnie poszukuję stażu lub stanowiska Junior Developer, gdzie mógłbym wspierać zespół w tworzeniu wartościowych rozwiązań, mierzyć się z ambitnymi wyzwaniami technicznymi i rozwijać swoje kompetencje. Jestem zmotywowany do dostarczania realnych rezultatów i pracy zgodnie z wysokimi standardami inżynierskimi."        proj_bank: "System zarządzania skarbcem bankowym w C# z przetwarzaniem danych LINQ i 100% pokryciem testami jednostkowymi.",
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        const level = parseInt(tag.dataset.level) || 1;
        const labels = ['Beginner', 'Basic', 'Intermediate', 'Pro'];
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        
        let segmentsHtml = '';
        for(let i = 1; i <= 4; i++) {
            segmentsHtml += `<div class="tooltip-segment ${i <= level ? 'filled' : ''}"></div>`;
        }

        tooltip.innerHTML = `
            <div class="tooltip-labels"><span>Beginner</span><span>Pro</span></div>
            <div class="tooltip-bar">${segmentsHtml}</div>
            <div class="tooltip-level-name">${labels[level - 1]}</div>
        `;
        tag.appendChild(tooltip);
    });

    const headerName = document.querySelector('.header-name');
    const heroTitle = document.querySelector('h1.gradient-text');

    if (headerName && heroTitle) {
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    headerName.classList.add('visible');
                } else {
                    headerName.classList.remove('visible');
                }
            });
        }, { 
            threshold: 0, 
            rootMargin: "-68px 0px 0px 0px" 
        });

        titleObserver.observe(heroTitle);
    }
});

const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px"
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
const particleCount = window.innerWidth < 600 ? 30 : 70;

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
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

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
                this.x -= forceDirectionX * force * 0.8;
                this.y -= forceDirectionY * force * 0.8;
            }
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme === 'dark' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.15)';
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
                ctx.strokeStyle = currentTheme === 'dark' ? `rgba(255, 255, 255, ${opacity * 0.15})` : `rgba(0, 0, 0, ${opacity * 0.08})`;
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