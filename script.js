const products=[

{
id:1,
name:"Rajmudra Fridge Magnet",
price:70,
size:"2.5 x 2.5 Inch",
category:"magnet",
image:"product1.jpg"
},

{
id:2,
name:"Gayatri Mantra Fridge Magnet",
price:60,
size:"4 x 4 Inch",
category:"magnet",
image:"product2.jpg"
},

{
id:3,
name:"Marathi Month Calendar",
price:249,
size:"6 x 6 Inch",
category:"frame",
image:"product3.jpg"
}

];

const texts=[

"Handmade Craft",

"Traditional Decor",

"Spiritual Gifts",

"Premium Fridge Magnets",

"Crafted With Soul"

];

let current=0;

setInterval(()=>{

document.getElementById("typing").innerHTML=texts[current];

current++;

if(current>=texts.length){

current=0;

}

},2000);

let cart=[];

function renderProducts(list){

const container=document.getElementById("products");

container.innerHTML="";

list.forEach(product=>{

container.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.size}</p>

<p>₹${product.price}</p>

<div class="qty">

<button>-</button>

<span>1</span>

<button>+</button>

</div>

<button class="addBtn"

onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}

renderProducts(products);

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

function addToCart(id){

const item=

products.find(p=>p.id===id);

cart.push(item);

document.getElementById("cartCount")

.innerHTML=cart.length;

}

document

.getElementById("cartBtn")

.addEventListener("click",()=>{

let message=

"Hello Kalavishva%0A%0A";

let total=0;

cart.forEach(item=>{

message+=

item.name+

" ₹"+

item.price+

"%0A";

total+=item.price;

});

message+=

"%0ATotal ₹"+

total;

window.open(

"https://wa.me/919762324854?text="+message

);

});
