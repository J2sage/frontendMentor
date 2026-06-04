import { getProduct } from "../script/product.js";
import { saveToStorage } from "../script/index.js";
const confirmButton = document.querySelector('.checkout-btn');
export const cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartUI();

export function updateCartUI() {
  renderCart();
  updateCartQuantity();
  toggleEmptyCart();
}

function updateCartQuantity() {
  const cartQuantity = document.getElementsByClassName('cart-quantity')[0];
  cartQuantity.textContent = `Your Cart(${cart.length})`;
}

export function toggleEmptyCart() {
  if(cart.length > 0){
    document.querySelector('.cart-list').style.display = 'block';
    document.querySelector('.calculate-total').style.display = 'block';
    document.querySelector('.empty').style.display = 'none';
  } else{
    document.querySelector('.cart-list').style.display = 'none';
    document.querySelector('.calculate-total').style.display = 'none';
    document.querySelector('.empty').style.display = 'flex';
  }
}

export function renderCart(){
  let cartHTML = ``;
  let totalPrice = 0;
  cart.forEach((cartItem)=>{

    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    totalPrice += cartItem.quantity * matchingProduct.priceCents;
    document.querySelector('.total-price').textContent = `$${totalPrice}`;

    cartHTML +=`
      <div class="hero">
        <div class="left-hero">
          <p class="selected">${matchingProduct.fullName}</p>
          <p class="selected-details">
            <span class="quantit">${cartItem.quantity}X</span>
            <span class="one">@ <b>$</b>${(matchingProduct.priceCents)}</span>
            <span class="total"><b>$</b>${(cartItem.quantity * matchingProduct.priceCents)}</span>
          </p>
        </div>
        <div class="right-hero"><img class="remove-item" src="images/icon-remove-item.svg" alt="remove-icon" data-product-id="${productId}"></div>
      </div>
      
    `
  })
  document.querySelector('.cart-list').innerHTML = cartHTML;
}

function removeFromCart(productId){
  const matchingIndex = cart.findIndex((item)=> item.productId === productId);
  if(matchingIndex !== -1){
    cart.splice(matchingIndex, 1);
    saveToStorage();
  }
}

document.querySelector('.cart-list').addEventListener('click', (event) => {
  const button = event.target.closest('.remove-item');
  if (!button) return;
  const productId = button.dataset.productId;
  removeFromCart(productId);
});
confirmButton.addEventListener('click', () => {
  renderOverlay();
  document.querySelector('.overlay-container').style.display = 'block';
  document.querySelector('main').style.filter = 'opacity(0.3)';
  document.querySelector('main').style.pointerEvents = 'none';
  document.querySelector('main').style.userSelect = 'none';
});

function renderOverlay(){
  let overlayHTML = ``;
  let totalPrice = 0;

  cart.forEach((cartItem)=>{
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    totalPrice += cartItem.quantity * matchingProduct.priceCents;
    document.querySelector('.total-order-price').textContent = `$${totalPrice}`;

    overlayHTML += `
      <div class="order-item">
        <div class="order-left">
          <img src="${matchingProduct.thumbnail}" alt="chocolate-cake-image">
          <div class="order-item-info">
            <p class="order-item-name">${matchingProduct.fullName}</p>
            <div class="order-item-price">
              <p class="item-quantity">${cartItem.quantity}X</p>
              <p class="item-price">@ <b>$</b>${(matchingProduct.priceCents)}</p>
            </div>
          </div>
        </div>
        <p class="order-item-total"><b>$</b>${(cartItem.quantity * matchingProduct.priceCents)} </p>
      </div>
    `;
  });
  document.querySelector('.order').innerHTML = overlayHTML;
}
document.querySelector('.new').addEventListener('click', () => {
  cart.length = 0;
  saveToStorage();
  document.querySelector('.overlay-container').style.display = 'none';
  document.querySelector('main').style.filter = 'opacity(1)';
  document.querySelector('main').style.pointerEvents = 'auto';
  document.querySelector('main').style.userSelect = 'auto';
});