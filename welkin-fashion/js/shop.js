document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".add-to-cart");
  const countSpan = document.getElementById("cart-count");

  function updateCount() {
    const cart = JSON.parse(localStorage.getItem("welkinCart")) || [];
    if (countSpan) countSpan.textContent = cart.length;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const item = {
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: btn.dataset.price
      };
      const cart = JSON.parse(localStorage.getItem("welkinCart")) || [];
      cart.push(item);
      localStorage.setItem("welkinCart", JSON.stringify(cart));
      alert(`✅ "${item.name}" added to cart!`);
      updateCount();
    });
  });

  updateCount();
});
