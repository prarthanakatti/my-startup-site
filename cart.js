// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
function displayCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty!</p>';
    document.getElementById('total-price').innerText = '';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <p><strong>${item.name}</strong> - $${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(itemDiv);

    total += item.price;
  });

  document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// Show cart on page load
window.onload = displayCart;
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
      button.addEventListener("click", function () {
          const product = {
              name: this.getAttribute("data-name"),
              price: this.getAttribute("data-price")
          };

          // Get current cart from localStorage
          let cart = JSON.parse(localStorage.getItem("cart")) || [];

          // Add new product
          cart.push(product);

          // Save back to localStorage
          localStorage.setItem("cart", JSON.stringify(cart));

          alert(product.name + " added to cart!");
      });
  });
});
