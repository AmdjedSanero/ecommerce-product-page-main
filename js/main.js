let three_bar = document.querySelector(
  ".head .container .logo-and-list .three-bar"
);
let list = document.querySelector(".head .container .list");
let close_bar = document.querySelector(
  ".head .container .logo-and-list .close-bar"
);
let thumbs = document.querySelectorAll(
  ".context .container .gallery .thumbs img"
);
let image_product = document.querySelector(
  ".context .container .gallery .image-product img"
);
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
    let numOfThumb = img.dataset.num;
    image_product.src = `images/image-product-${numOfThumb}.jpg`;
  })
);
