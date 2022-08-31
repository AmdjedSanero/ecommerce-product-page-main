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
let counteur = 1;
let numOfThumb = 1;
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
  if (count.innerHTML != 0) {
    counteur--;
    count.innerHTML = counteur;
  }
});
