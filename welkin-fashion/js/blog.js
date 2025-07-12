document.addEventListener("DOMContentLoaded", () => {
  const span = document.getElementById("cart-count");
  if (span) {
    const cart = JSON.parse(localStorage.getItem("welkinCart")) || [];
    span.textContent = cart.length;
  }
});
