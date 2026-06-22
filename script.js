const texts = [
"Handmade Craft",
"Traditional Decor",
"Spiritual Gifts",
"Premium Fridge Magnets",
"Crafted With Soul"
];

let current = 0;

document.getElementById("typing").innerHTML = texts[0];

setInterval(() => {

current++;

if(current >= texts.length){
current = 0;
}

document.getElementById("typing").innerHTML = texts[current];

},2500);


/* CART */

function addToCart(id){

const product =
products.find(p => p.id === id);

const qty =
quantities[id];

const existing =
cart.find(item => item.id === id);

if(existing){

existing.qty += qty;

}else{

cart.push({
...product,
qty: qty
});

}

quantities[id] = 1;

const qtyElement =
document.getElementById(`qty-${id}`);

if(qtyElement){
qtyElement.innerText = 1;
}

updateCart();

alert(
qty + " x " +
product.name +
" added to cart"
);

}


/* RENDER PRODUCTS */

function renderProducts(list){

const container = document.getElementById("products");

container.innerHTML = "";

list.forEach(product=>{

if(!quantities[product.id]){
quantities[product.id] = 1;
}

container.innerHTML += `

<div class="card">

<img
src="${product.image}"
alt="${product.name}"
onclick="openImage('${product.image}')"
>

<h3>${product.name}</h3>

<p>${product.size}</p>

<p><b>₹${product.price}</b></p>

<div class="qty">

<button onclick="decreaseQty(${product.id})">-</button>

<span id="qty-${product.id}">
${quantities[product.id]}
</span>

<button onclick="increaseQty(${product.id})">+</button>

</div>

<button
class="addBtn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}

renderProducts(products);


/* FILTER */

function filterProducts(category){

if(category==="all"){

renderProducts(products);

return;

}

renderProducts(

products.filter(
p=>p.category===category
)

);

}


/* QUANTITY */

function increaseQty(id){

quantities[id]++;

document.getElementById(
`qty-${id}`
).innerText = quantities[id];

}

function decreaseQty(id){

if(quantities[id] > 1){

quantities[id]--;

document.getElementById(
`qty-${id}`
).innerText = quantities[id];

}

}


/* ADD TO CART */

function addToCart(id){

const product =
products.find(
p=>p.id===id
);

const qty =
quantities[id];

const existing =
cart.find(
item=>item.id===id
);

if(existing){

existing.qty += qty;

}else{

cart.push({

...product,

qty: qty

});

}

updateCart();

alert(
qty +
" x " +
product.name +
" added to cart"
);

}


/* UPDATE CART */

function updateCart(){

let totalQty = 0;

cart.forEach(item=>{

totalQty += item.qty;

});

document.getElementById(
"cartCount"
).innerText = totalQty;

}


/* WHATSAPP ORDER */

document
.getElementById("cartBtn")
.addEventListener("click",()=>{

if(cart.length===0){

alert(
"Your cart is empty"
);

return;

}

let total = 0;

let message =
"Hello Kalavishva,%0A%0AI would like to order:%0A%0A";

cart.forEach(item=>{

const itemTotal =
item.price * item.qty;

total += itemTotal;

message +=

item.name +
" x " +
item.qty +
" = ₹" +
itemTotal +
"%0A";

});

message +=

"%0A--------------------%0A";

message +=

"Total Amount: ₹" +
total +
"%0A%0A";

message +=

"Please confirm availability.";

window.open(

"https://wa.me/919762324854?text=" +
message

);

});


/* IMAGE ZOOM */

function openImage(img){

document.getElementById(
"lightbox"
).style.display = "flex";

document.getElementById(
"lightboxImg"
).src = img;

}

function closeImage(){

document.getElementById(
"lightbox"
).style.display = "none";

}
