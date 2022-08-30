let three_bar = document.querySelector(
  ".head .container .logo-and-list .three-bar"
);
let list = document.querySelector(".head .container .list");
let close_bar = document.querySelector(
  ".head .container .logo-and-list .close-bar"
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
