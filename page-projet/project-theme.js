// Toggle Dark Mode pour les pages projet
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier la préférence sauvegardée
const savedDarkMode = localStorage.getItem('dark-mode');
const isDark = savedDarkMode === 'true' || 
              (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);

if (isDark) {
    body.classList.add('dark');
    if (themeToggle) {
        themeToggle.checked = true;
    }
}

if (themeToggle) {
    themeToggle.addEventListener('change', () => {
        const isDarkMode = themeToggle.checked;
        if (isDarkMode) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('dark-mode', isDarkMode);
    });
}
