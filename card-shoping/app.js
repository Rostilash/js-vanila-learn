let iconCart = document.querySelector(".icon-cart");
let closeCart = document.querySelector(".close");
let body = document.querySelector("body");
let listProductsHTML = document.querySelector(".listProduct");
let listCartHTML = document.querySelector(".listCart");
let iconCartSpan = document.querySelector(".icon-cart span");

let listProducts = [];
let carts = [];
iconCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});

closeCart.addEventListener("click", () => {
  body.classList.toggle("showCart");
});
2;
let cartItems = [
  {
    id: 1,
    name: "LD01 lOUNGE CHAIR",
    price: 200,
    image: "img/chair.png",
  },
  {
    id: 2,
    name: "LD02 lOUNGE CHAIR",
    price: 250,
    image: "img/chair.png",
  },
  {
    id: 3,
    name: "LD03 lOUNGE CHAIR",
    price: 290,
    image: "img/chair.png",
  },
  {
    id: 4,
    name: "LD04 lOUNGE CHAIR",
    price: 300,
    image: "img/chair.png",
  },
  {
    id: 5,
    name: "LD05 lOUNGE CHAIR",
    price: 500,
    image: "img/chair2.png",
  },
  {
    id: 6,
    name: "LD06 lOUNGE CHAIR",
    price: 210,
    image: "img/chair2.png",
  },
  {
    id: 7,
    name: "LD07 lOUNGE CHAIR",
    price: 280,
    image: "img/chair2.png",
  },
  {
    id: 8,
    name: "LD08 lOUNGE CHAIR",
    price: 150,
    image: "img/chair2.png",
  },
];
const addDataToHtml = () => {
  listProductsHTML.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.forEach((product) => {
      let newProduct = document.createElement("div");
      newProduct.classList.add("item");
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
					<img src="${product.image}" alt="">
					<h2>${product.name}</h2>
					<div class="price">${product.price}</div>
					<button class="addCart">
						Add To Cart
					</button>
            `;
      listProductsHTML.appendChild(newProduct);
    });
  }
};

listProductsHTML.addEventListener("click", (event) => {
  let positionCLick = event.target;
  if (positionCLick.classList.contains("addCart")) {
    let product_id = positionCLick.parentElement.dataset.id;
    addToCart(product_id);
  }
});

const addToCart = (product_id) => {
  let postionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
  if (carts.length <= 0) {
    carts = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (postionThisProductInCart < 0) {
    carts.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    carts[postionThisProductInCart].quantity = carts[postionThisProductInCart].quantity + 1;
  }

  addCartToHtml();
  addCartToMemory();
  console.log(carts);
};

const addCartToHtml = () => {
  listCartHTML.innerHTML = "";
  let totalQuantity = 0;
  if (carts.length > 0) {
    carts.forEach((cart) => {
      totalQuantity = totalQuantity + cart.quantity;
      let newCart = document.createElement("div");
      newCart.classList.add("item");
      newCart.dataset.id = cart.product_id;
      let positionProduct = cartItems.findIndex((value) => value.id == cart.product_id);
      let info = cartItems[positionProduct];
      newCart.innerHTML = `
            <div class="image">
                <img src="${info.image}" alt="">
            </div>
            <div class="name">${info.name}</div>
            <div class="totalPrice">
                ${info.price * cart.quantity} 
            </div>
             <div class="quantity">
                <span class="minus"><</span>
                <span>${cart.quantity}</span>
                <span class="plus">></span>
            </div>
        `;
      listCartHTML.appendChild(newCart);
    });
  }
  iconCartSpan.innerHTML = totalQuantity;
};
const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(carts));
};

if (localStorage.getItem("cart")) {
  carts = JSON.parse(localStorage.getItem("cart"));
  addCartToHtml();
}
addDataToHtml();
addCartToHtml();

listCartHTML.addEventListener("click", (event) => {
  let positionCLick = event.target;
  console.log(positionCLick);

  if (positionCLick.classList.contains("minus") || positionCLick.classList.contains("plus")) {
    let product_id = positionCLick.parentElement.parentElement.dataset.id;
    console.log(product_id);
    let type = "minus";

    if (positionCLick.classList.contains("plus")) {
      type = "plus";
    }
    changeQuantity(product_id, type);
  }
});
const changeQuantity = (product_id, type) => {
  let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
  if (positionItemInCart >= 0) {
    switch (type) {
      case "plus":
        carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
        break;

      default:
        let valueChange = carts[positionItemInCart].quantity - 1;
        if (valueChange > 0) {
          carts[positionItemInCart].quantity = valueChange;
        } else {
          carts.splice(positionItemInCart, 1);
        }
        break;
    }
  }

  addCartToHtml();
  addCartToMemory();
};
