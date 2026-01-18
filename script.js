/* ===== Scroll reveal ===== */
const revealEls = document.querySelectorAll('.reveal');

function handleReveal() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

/* ===== Theme toggle (dark / light) ===== */
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

// apply saved theme or default to dark
if (savedTheme) root.setAttribute('data-theme', savedTheme);
else root.setAttribute('data-theme', 'dark');

function updateToggleIcon() {
  const t = root.getAttribute('data-theme');
  themeToggle.textContent = t === 'dark' ? '🌙' : '☀️';
}
updateToggleIcon();

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  updateToggleIcon();
});
