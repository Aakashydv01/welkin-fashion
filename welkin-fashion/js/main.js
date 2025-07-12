document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Cart count
  const span = document.getElementById('cart-count');
  if (span) {
    const cart = JSON.parse(localStorage.getItem("welkinCart")) || [];
    span.textContent = cart.length;
  }

  // Fade-in animations
  function triggerAnimations() {
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100 && !el.classList.contains('animated')) {
        el.classList.add('animated');
        if (el.classList.contains('fade-in-up')) el.style.animationName = 'fadeInUp';
        if (el.classList.contains('fade-in-left')) el.style.animationName = 'fadeInLeft';
        if (el.classList.contains('fade-in-right')) el.style.animationName = 'fadeInRight';
      }
    });
  }
  window.addEventListener('scroll', triggerAnimations);
  triggerAnimations();
});


document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  updateCartCount();

  function updateCartCount() {
    const span = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem("welkinCart")) || [];
    if (span) span.textContent = cart.length;
  }

  function triggerAnimations() {
    document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
      if (!el.classList.contains('animated') &&
          el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('animated');
        if (el.classList.contains('fade-in-up')) el.style.animationName='fadeInUp';
        if (el.classList.contains('fade-in-left')) el.style.animationName='fadeInLeft';
        if (el.classList.contains('fade-in-right')) el.style.animationName='fadeInRight';
      }
    });
  }

  window.addEventListener('scroll', triggerAnimations);
  triggerAnimations();
});



// main.js

document.addEventListener('DOMContentLoaded', () => {
  const countEl = document.getElementById('cart-count');
  if (!countEl) return;

  let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
  countEl.textContent = cartCount;
});
