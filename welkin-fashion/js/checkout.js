// js/checkout.js
document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('checkout-cart-list');
  const totalEl = document.getElementById('checkout-total');

  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML = `<span>${item.name}</span><strong>₹${item.price.toFixed(2)}</strong>`;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = total.toFixed(2);

  // Form submission
  const checkoutForm = document.getElementById('checkout-form');
  checkoutForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ Order placed successfully!');
    localStorage.removeItem('cart');
    window.location.href = 'thankyou.html';
  });
});
