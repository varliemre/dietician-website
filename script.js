const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme + '-theme');
}