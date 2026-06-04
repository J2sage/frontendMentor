import { product } from "../script/product.js";
import { cart, updateCartUI } from "../script/cart.js";

const cartQuantity = document.getElementsByClassName('cart-quantity')[0];

let productHTML = ``;
product.forEach((cartItem) => {
  productHTML += `
    <div class="choice-container">
      <div class="img-container">
        <img src="${cartItem.image}" alt="${cartItem.alte}">
        <div class="addbtn" data-product-id="${cartItem.id}">
          <img src="images/icon-add-to-cart.svg" alt="add-to-cart-button">
          <p class ="js-add">Add to Cart</p>
        </div>
        <div class="quantity">
          <img src="images/icon-decrement-quantity.svg" class="decrement" alt="decrement-image">
          <p class="number">1</p>
          <img src="images/icon-increment-quantity.svg" class="increment" alt="increment-image">
        </div>
      </div>
      <p class="name">${cartItem.name}</p>
      <p class="full-name">${cartItem.fullName}</p>
      <p class="price">$${cartItem.priceCents}</p>
    </div>
  `;
});

document.querySelector('.choice-grid')
  .innerHTML = productHTML;


document.querySelectorAll('.addbtn').forEach((button)=>{
  button.addEventListener('click', ()=>{
    const productId = button.dataset.productId;
    console.log(productId);
    addToCart(productId);
    console.log(cart);  
    updateCartUI();
    saveToStorage();
  })
})

function addToCart(productId){
  let matchingItem;
  cart.forEach((item)=>{
    if(productId === item.productId){
      matchingItem = item;
    }
  })
  if(matchingItem){
    matchingItem.quantity +=1;
  }else{
    cart.push({
      productId,
      quantity : 1
    })
  }
}
export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}