// js/contact.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', () => {
    setTimeout(() => {
      form.reset();
    }, 1000); // Optional: Reset after submit
  });
});
