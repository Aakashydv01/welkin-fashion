// Render Cart Items
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('welkinCart')) || [];
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const countEl = document.getElementById('cart-count');

  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;">Your cart is empty.</p>';
  } else {
    cart.forEach((item, idx) => {
      total += parseFloat(item.price) * (item.qty || 1);
      const div = document.createElement('div');
      div.className = 'cart-item';

      div.innerHTML = `
        <div><strong>${item.name}</strong> ₹${item.price} × ${item.qty || 1}</div>
        <button class="remove-btn" onclick="removeItem(${idx})">Remove</button>
      `;

      container.appendChild(div);
    });
  }

  totalEl.textContent = total.toFixed(2);
  countEl.textContent = cart.length;
}

// Remove a single item
function removeItem(i) {
  const cart = JSON.parse(localStorage.getItem('welkinCart')) || [];
  cart.splice(i, 1);
  localStorage.setItem('welkinCart', JSON.stringify(cart));
  renderCart();
}

// Clear the entire cart
document.getElementById('clear-cart').addEventListener('click', () => {
  localStorage.removeItem('welkinCart');
  renderCart();
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});
