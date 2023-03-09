let products = [];

function addProduct(title, price) {
  products.push({
    title: title,
    price: price,
    quantity: 0
  });
}

function renderProducts() {
  let productsHtml = '';
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productsHtml += `
      <div class = "product-container">
        <img src="./assets/img/to-leslie-24629.png">
        <h3 class = "product-h">${product.title}</h3>
        <p class = "product-p">${product.price} TL</p>
        <button class = "menfi" onclick="decreaseQuantity(${i})">-</button>
        <span class = "sifir">${product.quantity}</span>
        <button class = "musbet" onclick="increaseQuantity(${i})">+</button>
        <button class = "sebet" onclick="addToCart(${i})">Sepete Ekle</button>
      </div>
    `;
  }
  document.getElementById('products').innerHTML = productsHtml;
}

function increaseQuantity(index) {
  products[index].quantity++;
  renderProducts();
}

function decreaseQuantity(index) {
  if (products[index].quantity > 0) {
    products[index].quantity--;
    renderProducts();
  }
}

function addToCart(index) {
  const product = products[index];
  if (product.quantity > 0) {
    const cartItemHtml = `
      <div class = "sebetdeki">
        <img src="./assets/img/to-leslie-24629.png">
        
        <p class = "sebetdeki-p">${product.quantity} x ${product.price} TL</p>
        <p class = "sebetdeki-tp-p">Toplam: ${product.quantity * product.price} TL</p>
        <button class = "sebetdeki-sil" class="sil" onclick="removeFromCart(${index})">Sil</button>
      </div>
    `;
    document.getElementById('mySidenav').innerHTML += cartItemHtml;
    product.quantity = 0;
    renderProducts();
  }
}

function removeFromCart(index) {
  document.getElementById('mySidenav').children[index].remove();
}

addProduct('Film 1', 10);
addProduct('Film 2', 20);
addProduct('Film 3', 30);

window.onload = function() {
  renderProducts();
};



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

function openNav() {
    document.getElementById("mySidenav").style.width = "440px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById('btn-two').style.display = 'block';
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById('btn-two').style.display = 'none';
  }