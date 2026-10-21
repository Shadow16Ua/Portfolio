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
        nav_about: "About", nav_exp: "Experience", nav_edu: "Education", nav_projects: "Projects", nav_skills: "Tech Stack",
        status_open: "🚀 Open to Internship / Part-Time (15–20h/w) in Poland",
        btn_cv: "📄 Download CV (PDF)",
        btn_contacts: "📬 Contacts & Links",
        about_text: "Applied Informatics (B.Eng.) student at DSW IDEIS (WSEI) in Kraków with full legal right to work in Poland. Hands-on experience in C#/.NET, Java, JavaScript, SQL/Supabase, and Linux server reliability. I combine academic knowledge of data structures and OOP with practical AI-assisted engineering workflows, code debugging, and web development.",
        exp1_role: "AI Data Annotation Specialist — TSMG Holding",
        exp1_date: "Aug 2026 — Present",
        exp1_type: "Freelance / Remote",
        exp1_desc: "Transcribing and annotating Ukrainian and Polish audio data for LLM and ASR training with precise time-stamping and speaker identification. Performing strict Quality Assurance (QA) against technical guidelines.",
        exp2_role: "Server Infrastructure Owner & Admin — Afterlight",
        exp2_date: "Oct 2025 — May 2026",
        exp2_type: "Linux Administration, SRE & Tech Support",
        exp2_desc: "Owned end-to-end reliability of a live multiplayer server on Linux: configured hosting infrastructure, monitored uptime, managed complex access/permission rules (LuckPerms), and analyzed system logs to diagnose runtime errors and software conflicts.",
        edu_uni: "DSW IDEIS (WSEI), Kraków",
        edu_date: "Oct 2025 — Present (Expected 2029)",
        edu_degree: "B.Eng. in Applied Informatics (Informatyka Stosowana) — 2nd Year Student",
        edu_courses: "<b>Key Coursework:</b> Data Structures & Algorithms, Object-Oriented Programming (C#, Java), SQL Databases, Operating Systems, Network Fundamentals.",
        certs_title: "Certifications",
        certs_list: `
            <li>• <b>C# Foundation Certificate</b> — freeCodeCamp & Microsoft Learn</li>
            <li>• <b>API Beginner</b> — Postman</li>
            <li>• <b>Generative AI Fundamentals</b> — Databricks</li>
            <li>• <b>AI Prompt & Response Evaluation (Project Lyra)</b> — Welo Data</li>
            <li>• <b>Data Annotation & QA</b> — TSMG Holding</li>
        `,
        langs_title: "Languages",
        langs_list: `
            <li>• <b>English: B2</b> (Upper-Intermediate, CEFR Certificate — International House)</li>
            <li>• <b>Polish: B2</b> (State Certificate — Państwowa Komisja)</li>
            <li>• <b>Ukrainian:</b> Native</li>
        `,
        proj_markt: "Online data-tracking & prediction web application with user authentication, custom profiles, and real-time Supabase PostgreSQL backend.",
        proj_afterlight: "Official portal for a multiplayer Minecraft server. Features custom UI, live online player counter, IP copy, and technical SEO optimization.",
        proj_tense: "Interactive web platform for mastering English grammar tenses with quizzes, Supabase integration, technical SEO (sitemap.xml, robots.txt), and Google Analytics.",
        proj_mods: "8 standalone open-source Java mods published on Modrinth with 7,000+ total downloads. Includes client-server architecture, 3D model geometry debugging, and version management.",
        proj_alert: "Community-driven emergency notification bot for Discord that broadcasts instant alerts from DM button interactions to public channels.",
        proj_university: "Academic and personal software projects focusing on Data Structures & Algorithms, OOP, C#/.NET applications, and relational databases.",
        footer_tagline: "Let's build something awesome together."
    },
    uk: {
        nav_about: "Про мене", nav_exp: "Досвід", nav_edu: "Освіта", nav_projects: "Проєкти", nav_skills: "Стек технологій",
        status_open: "🚀 Відкритий до стажування / Part-Time (15–20 год/тиж) у Польщі",
        btn_cv: "📄 Завантажити CV (PDF)",
        btn_contacts: "📬 Контакти та посилання",
        about_text: "Студент 2-го курсу прикладної інформатики (B.Eng.) в DSW IDEIS (WSEI) у Кракові з повним правом на роботу в Польщі. Маю практичний досвід у C#/.NET, Java, JavaScript, SQL/Supabase та адмініструванні Linux-серверів. Поєдную академічну базу (структури даних, ООП) із сучасними AI-інструментами розробки, налагодженням коду та створенням вебдодатків.",
        exp1_role: "AI Data Annotation Specialist — TSMG Holding",
        exp1_date: "Серпень 2026 — Теперішній час",
        exp1_type: "Фріланс / Віддалено",
        exp1_desc: "Транскрибація та анотація українських і польських аудіоданих для тренування LLM та ASR-моделей із точним тайм-стемпінгом та ідентифікацією спікерів. Проведення контролю якості (QA) згідно з технічними вимогами.",
        exp2_role: "Server Infrastructure Owner & Admin — Afterlight",
        exp2_date: "Жовтень 2025 — Травень 2026",
        exp2_type: "Linux-адміністрування, SRE та техпідтримка",
        exp2_desc: "Відповідав за безперебійну роботу мультиплеєрного сервера на Linux: налаштування інфраструктури, моніторинг аптайму, керування правами доступу (LuckPerms), аналіз системних логів для усунення runtime-помилок і конфліктів ПЗ.",
        edu_uni: "DSW IDEIS (WSEI), Краків",
        edu_date: "Жовт 2025 — Теперішній час (Випуск 2029)",
        edu_degree: "Інженер прикладної інформатики (Informatyka Stosowana) — Студент 2-го курсу",
        edu_courses: "<b>Ключові предмети:</b> Структури даних та алгоритми, Об'єктно-орієнтоване програмування (C#, Java), Бази даних SQL, Операційні системи, Комп'ютерні мережі.",
        certs_title: "Сертифікати",
        certs_list: `
            <li>• <b>C# Foundation Certificate</b> — freeCodeCamp & Microsoft Learn</li>
            <li>• <b>API Beginner</b> — Postman</li>
            <li>• <b>Generative AI Fundamentals</b> — Databricks</li>
            <li>• <b>AI Prompt & Response Evaluation (Project Lyra)</b> — Welo Data</li>
            <li>• <b>Data Annotation & QA</b> — TSMG Holding</li>
        `,
        langs_title: "Мови",
        langs_list: `
            <li>• <b>Англійська: B2</b> (Upper-Intermediate, сертифікат CEFR — International House)</li>
            <li>• <b>Польська: B2</b> (Державний сертифікат — Państwowa Komisja)</li>
            <li>• <b>Українська:</b> Рідна</li>
        `,
        proj_markt: "Вебдодаток для відстеження даних та прогнозів у реальному часі з авторизацією, профілями гравців та хмарною базою даних Supabase PostgreSQL.",
        proj_afterlight: "Офіційний портал для Minecraft-сервера. Кастомний дизайн, лічильник онлайну в реальному часі, копіювання IP та технічна SEO-оптимізація.",
        proj_tense: "Інтерактивна платформа для вивчення часів англійської мови з тестами, базою Supabase, технічним SEO (sitemap.xml, robots.txt) та Google Analytics.",
        proj_mods: "8 опублікованих Java-модів на Modrinth із 7,000+ завантаженнями. Клієнт-серверна архітектура, налагодження 3D-геометрії моделей та підтримка релізів.",
        proj_alert: "Discord-бот екстрених сповіщень спільноти, який миттєво транслює тривоги в публічні канали через інтерактивні кнопки в особистих повідомленнях.",
        proj_university: "Колекція академічних і власних проєктів: фокус на структурах даних і алгоритмах (DSA), ООП, C#/.NET та реляційних базах даних.",
        footer_tagline: "Створимо щось круте разом."
    },
    pl: {
        nav_about: "O mnie", nav_exp: "Doświadczenie", nav_edu: "Edukacja", nav_projects: "Projekty", nav_skills: "Stack technologiczny",
        status_open: "🚀 Otwarty na staż / Part-Time (15–20h/tyg.) w Polsce",
        btn_cv: "📄 Pobierz CV (PDF)",
        btn_contacts: "📬 Kontakt i linki",
        about_text: "Student 2. roku Informatyki Stosowanej (inż.) na DSW IDEIS (WSEI) w Krakowie z pełnym prawem do pracy w Polsce. Posiadam praktyczne doświadczenie w C#/.NET, Javie, JavaScript, SQL/Supabase oraz administracji serwerami Linux. Łączę wiedzę akademicką (struktury danych, OOP) z nowoczesnymi narzędziami AI, debugowaniem kodu i tworzeniem aplikacji webowych.",
        exp1_role: "AI Data Annotation Specialist — TSMG Holding",
        exp1_date: "Sierpień 2026 — Obecnie",
        exp1_type: "Freelance / Zdalnie",
        exp1_desc: "Transkrypcja i anotacja danych audio w języku ukraińskim i polskim na potrzeby trenowania modeli LLM i ASR z dokładnym oznaczaniem czasu oraz identyfikacją mówców. Kontrola jakości (QA) zgodnie z wytycznymi projektowymi.",
        exp2_role: "Server Infrastructure Owner & Admin — Afterlight",
        exp2_date: "Październik 2025 — Maj 2026",
        exp2_type: "Administracja Linux, SRE i Wsparcie Techniczne",
        exp2_desc: "Odpowiedzialność za niezawodność serwera multiplayer na systemie Linux: konfiguracja infrastruktury, monitorowanie uptime'u, zarządzanie uprawnieniami (LuckPerms) oraz analiza logów systemowych w celu diagnozowania błędów runtime.",
        edu_uni: "DSW IDEIS (WSEI), Kraków",
        edu_date: "Paź 2025 — Obecnie (Planowane ukończenie: 2029)",
        edu_degree: "Inżynier Informatyki Stosowanej — Student 2. roku",
        edu_courses: "<b>Kluczowe przedmioty:</b> Struktury danych i algorytmy, Programowanie obiektowe (C#, Java), Bazy danych SQL, Systemy operacyjne, Podstawy sieci komputerowych.",
        certs_title: "Certyfikaty",
        certs_list: `
            <li>• <b>C# Foundation Certificate</b> — freeCodeCamp & Microsoft Learn</li>
            <li>• <b>API Beginner</b> — Postman</li>
            <li>• <b>Generative AI Fundamentals</b> — Databricks</li>
            <li>• <b>AI Prompt & Response Evaluation (Project Lyra)</b> — Welo Data</li>
            <li>• <b>Data Annotation & QA</b> — TSMG Holding</li>
        `,
        langs_title: "Języki",
        langs_list: `
            <li>• <b>Angielski: B2</b> (Upper-Intermediate, Certyfikat CEFR — International House)</li>
            <li>• <b>Polski: B2</b> (Certyfikat Państwowej Komisji ds. Poświadczania Znajomości Języka Polskiego)</li>
            <li>• <b>Ukraiński:</b> Ojczysty</li>
        `,
        proj_markt: "Aplikacja webowa do śledzenia danych w czasie rzeczywistym z autoryzacją użytkowników, profilami i bazą danych Supabase PostgreSQL.",
        proj_afterlight: "Oficjalna strona serwera Minecraft. Niestandardowy interfejs, licznik graczy online na żywo, kopiowanie IP oraz optymalizacja techniczna SEO.",
        proj_tense: "Interaktywna platforma do nauki czasów gramatycznych z quizami, integracją Supabase, technicznym SEO (sitemap.xml, robots.txt) i Google Analytics.",
        proj_mods: "8 autorskich modów Java opublikowanych na Modrinth z ponad 7 000 pobrań. Architektura klient-serwer, debugowanie geometrii modeli 3D oraz zarządzanie wersjami.",
        proj_alert: "Bot ostrzegawczy na Discorda umożliwiający natychmiastowe wysyłanie alertów do kanałów publicznych za pomocą przycisków w wiadomościach prywatnych.",
        proj_university: "Zbiór projektów akademickich i własnych skupionych na strukturach danych i algorytmach (DSA), OOP, C#/.NET oraz relacyjnych bazach danych.",
        footer_tagline: "Stwórzmy coś niesamowitego razem."
    }
};

const savedLang = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
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
const revealOptions = { threshold: 0.05, rootMargin: "0px 0px -40px 0px" };

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => { revealOnScroll.observe(el); });

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