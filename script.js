const products = [

{
id:1,
name:"Marathi Month Calendar",
price:249,
size:"6 x 6 Inch",
category:"frame",
image:"product1.jpg"
},

{
id:2,
name:"Shri Saraswati Frame",
price:299,
size:"7 x 5 Inch",
category:"frame",
image:"product2.jpg"
},

{
id:3,
name:"Shree Swami Samarth Fridge Magnet",
price:149,
size:"6 x 4 Inch",
category:"magnet",
image:"product3.jpg"
},

{
id:4,
name:"Hindu Goddess Fridge Magnet",
price:149,
size:"6 x 4 Inch",
category:"magnet",
image:"product4.jpg"
},

{
id:5,
name:"Rajmudra Fridge Magnet",
price:70,
size:"2.5 x 2.5 Inch",
category:"magnet",
image:"product5.jpg"
},

{
id:6,
name:"Sarasvati Mata Symbol Fridge Magnet",
price:70,
size:"2.5 x 2.5 Inch",
category:"magnet",
image:"product6.jpg"
},

{
id:7,
name:"Sarasvati Mata Symbol Slate Fridge Magnet",
price:70,
size:"3 x 2.5 Inch",
category:"magnet",
image:"product7.jpg"
},

{
id:8,
name:"Sarasvati Mata Symbol Fridge Magnet",
price:149,
size:"6 x 4 Inch",
category:"magnet",
image:"product8.jpg"
},

{
id:9,
name:"Shri Yantra Fridge Magnet",
price:70,
size:"4 x 4 Inch",
category:"magnet",
image:"product9.jpg"
},

{
id:10,
name:"Goddess Blessings Fridge Magnet",
price:149,
size:"6 x 4 Inch",
category:"magnet",
image:"product10.jpg"
},

{
id:11,
name:"Gayatri Mantra Fridge Magnet",
price:60,
size:"4 x 4 Inch",
category:"magnet",
image:"product11.jpg"
},

{
id:12,
name:"Marathi Pride Magnet",
price:60,
size:"4 x 3 Inch",
category:"magnet",
image:"product12.jpg"
},

{
id:13,
name:"Wooden Temple",
price:199,
size:"4 x 3 Inch",
category:"decor",
image:"product13.jpg"
},

{
id:14,
name:"Konkani Thali Magnet",
price:120,
size:"3 x 3 Inch",
category:"magnet",
image:"product14.jpg"
},

{
id:15,
name:"Spiritual Combo Pack",
price:99,
size:"4 x 3 Inch",
category:"combo",
image:"product15.jpg"
},

{
id:16,
name:"Marathi Fridge Magnet Combo",
price:99,
size:"4 x 4 Inch",
category:"combo",
image:"product16.jpg"
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
