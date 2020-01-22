$(".owl1").owlCarousel({
  margin: 10,
  loop: true,
  lazyLoad: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    }
  }
});

$(".owl2").owlCarousel({
  margin: 10,
  loop: true,
  lazyLoad: true,
  nav: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 1.5,
    },
    1300: {
      items: 2.5
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