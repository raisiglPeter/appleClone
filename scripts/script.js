const productsBar = document.getElementById("products-bar");
const scroll_left = document.getElementById("list-scroll-left");
const scroll_right = document.getElementById("list-scroll-right");
const scrollStep = 50;

scroll_left.addEventListener("click", () => {
  productsBar.scrollLeft -= scrollStep;
});

scroll_right.addEventListener("click", () => {
  productsBar.scrollLeft += scrollStep;
});
