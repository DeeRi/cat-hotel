$(".owl1").owlCarousel({
  margin: 10,
  loop: true,
  lazyLoad: true,
  nav: true,
  responsive: {
    0: {
      items: 1
    }
  }
});


let burger = document.querySelector(".menu-button");
let mainNav = document.querySelector(".header__navigation");

burger.addEventListener("click", function() {
  if (burger.classList.contains("menu-button--open")) {
    burger.classList.remove("menu-button--open");
    burger.classList.add("menu-button--close");
    mainNav.classList.remove("header__navigation--close");
    mainNav.classList.add("header__navigation--open");
  } else {
    burger.classList.remove("menu-button--close");
    burger.classList.add("menu-button--open");
    mainNav.classList.remove("header__navigation--open");
    mainNav.classList.add("header__navigation--close");
  }
});