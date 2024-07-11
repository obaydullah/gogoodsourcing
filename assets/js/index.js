// offcanvas menu
const customMenu = document.querySelector(".menu");
const topBar = document.querySelector(".top");
const middleBar = document.querySelector(" .middle");
const bottomBar = document.querySelector(" .bottom");
const offcanvasMenu = document.querySelector(".offcanvas__menu--area");
const overlay = document.querySelector(".overlay");

customMenu.addEventListener("click", function () {
  topBar.classList.toggle("rotate");
  middleBar.classList.toggle("hidden");
  bottomBar.classList.toggle("rotate");
  offcanvasMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", function () {
  topBar.classList.toggle("rotate");
  middleBar.classList.toggle("hidden");
  bottomBar.classList.toggle("rotate");
  offcanvasMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});
