// Toggle Menu Burger Mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier la préférence sauvegardée ou system
const isDark = localStorage.getItem('dark-mode') === 'true' || 
              (!localStorage.getItem('dark-mode') && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDark) {
    body.classList.add('dark');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    const isDarkMode = themeToggle.checked;
    if (isDarkMode) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    localStorage.setItem('dark-mode', isDarkMode);
});

// Animations au Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section').forEach(section => {
    observer.observe(section);
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    observer.observe(card);
    card.style.animationDelay = `${index * 0.1}s`;
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});