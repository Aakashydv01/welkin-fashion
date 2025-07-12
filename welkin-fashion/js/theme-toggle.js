(function() {
  const btn = document.createElement('div');
  btn.className = 'theme-toggle';
  btn.innerHTML = '<div class="slider">☀️</div>';
  document.body.appendChild(btn);

  const slider = btn.querySelector('.slider');
  const apply = mode => {
    document.body.classList.toggle('dark-mode', mode === 'dark');
    slider.textContent = mode === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('theme', mode);
  };

  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    apply(next);
  });

  const saved = localStorage.getItem('theme') || 'light';
  apply(saved);
})();
