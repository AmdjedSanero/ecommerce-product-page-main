let three_bar = document.querySelector(
  ".head .container .logo-and-list .three-bar"
);
let list = document.querySelector(".head .container .list");
let close_bar = document.querySelector(
  ".head .container .logo-and-list .close-bar"
);
let thumbs = document.querySelectorAll(".gallery .thumbs img");
let image_product = document.querySelectorAll(".gallery .image-product img");
let image_productZoom = document.querySelector(
  ".context .container .gallery .image-product img"
);
let all = document.querySelector(".all");
let close = document.querySelector(".all.active .gallery .close");
let next = document.querySelector(".all.active .gallery .next");
let prev = document.querySelector(".all.active .gallery .prev");
let plus = document.querySelector(
  ".context .container .info .add-to-cart .details .plus"
);
let minus = document.querySelector(
  ".context .container .info .add-to-cart .details .minus"
);
let count = document.querySelector(
  ".context .container .info .add-to-cart .details .count"
);
let cartBtn = document.querySelector(
  ".head .container .cart-and-profile .cart"
);
let cart = document.querySelector(".cart-data");
let addToCart = document.querySelector(
  ".context .container .info .add-to-cart .logo-and-btn"
);
let count_span = document.querySelector(".count-span");

let del;

let counthtml = count.innerHTML;
let counteur = 1;
let numOfThumb = 2;
let active_cart = false;
three_bar.addEventListener("click", function () {
  list.classList.remove("not-opened");
  list.classList.add("opened");
  close_bar.classList.remove("none");
});
close_bar.addEventListener("click", function () {
  list.classList.remove("opened");
  list.classList.add("not-opened");
  close_bar.classList.add("none");
});
thumbs.forEach((img) =>
  img.addEventListener("click", function () {
    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].classList.remove("active");
    }
    img.classList.add("active");
    numOfThumb = img.dataset.num;

    image_product.forEach((element) => {
      element.src = `images/image-product-${numOfThumb}.jpg`;
    });
    nextAndPrev(numOfThumb);
    console.log(thumbs);
  })
);
image_productZoom.addEventListener("click", function () {
  all.style.display = "flex";
  nextAndPrev(numOfThumb);
});
close.addEventListener("click", function () {
  all.style.display = "none";
});
function nextAndPrev(numOfThumb) {
  if (numOfThumb > 1 && numOfThumb < 4) {
    next.style.display = "flex";
    prev.style.display = "flex";
  } else if (numOfThumb < 2) {
    prev.style.display = "none";
    next.style.display = "flex";
  } else if (numOfThumb > 3) {
    next.style.display = "none";
    prev.style.display = "flex";
  }
}
next.addEventListener("click", function () {
  numOfThumb++;
  console.log(numOfThumb);

  nextAndPrev(numOfThumb);

  image_product.forEach((element) => {
    element.src = `images/image-product-${numOfThumb}.jpg`;
  });
});
prev.addEventListener("click", function () {
  numOfThumb--;
  console.log(numOfThumb);
  nextAndPrev(numOfThumb);

  image_product.forEach((element) => {
    element.src = `images/image-product-${numOfThumb}.jpg`;
  });
});
plus.addEventListener("click", function () {
  counteur++;
  count.innerHTML = counteur;
});
minus.addEventListener("click", function () {
  if (count.innerHTML != 1) {
    counteur--;
    count.innerHTML = counteur;
  }
});
cartBtn.addEventListener("click", function () {
  if (active_cart === false) {
    cart.classList.remove("non-active");
    cartBtn.src = "images/icon-cart-black.svg";
  } else {
    cart.classList.add("non-active");
    cartBtn.src = "images/icon-cart.svg";
  }
  active_cart = !active_cart;
});
let onlyOne = true;
addToCart.addEventListener("click", function () {
  if (onlyOne || counteur !== count.innerHTML) {
    let empty = document.querySelector(".cart-data .data .empty");

    let cart_data = document.querySelector(".cart-data .data");

    let data1 = document.createElement("div");
    let checkout = document.createElement("div");
    checkout.className = "checkout";
    let check = document.createElement("span");
    check.className = "check";
    check.innerHTML = "Checkout";
    checkout.appendChild(check);
    data1.className = "data1";
    cart_data.innerHTML = "";
    data1.innerHTML = "";
    cartBtn.src = "images/icon-cart-black.svg";

    data1.innerHTML = `
 <img src="images/image-product-1-thumbnail.jpg" alt="">
  <div class="text">
    <span class="text-title">Fall Limited Edition Sneakers</span><br>
    <span class="total">$125.00 x ${count.innerHTML} <b class="tot">$${
      count.innerHTML * 125.0
    }.00</b></span>
  </div>
  <img class="del" src="images/icon-delete.svg" alt="">
`;
    count_span.classList.remove("none");

    count_span.innerHTML = count.innerHTML;
    cart_data.appendChild(data1);
    cart_data.appendChild(checkout);
    del = document.querySelector(".data1 .del");
    del.addEventListener("click", function () {
      cart_data.innerHTML = "";

      let empty = document.createElement("span");
      empty.className = "empty";
      empty.innerHTML = "Your cart is empty";
      cart_data.appendChild(empty);
      count_span.classList.add("none");
    });
    empty.classList.add("none");
  }
  onlyOne = false;
});
