/* EVENTO DE CLIQUE NO MENU */
const menuOpener = document.querySelector(".header__menu-opener");
const nav = document.querySelector(".header__menu-nav");

menuOpener.addEventListener("click", function () {
  nav.classList.toggle("active-menu");
});

/* TINY SLIDER - PATROCINADORES*/
const slider = tns({
  container: ".patrocinio__list",
  controls: false,
  autoplayButtonOutput: false,
  items: 2,
  speed: 300,
  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    500: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },

    600: {
      items: 3,
    },

    700: {
      items: 4,       
    },

    900: {
      items: 6,
    },
  },
});


/*

Tiny Slider 

Documentacao
https://github.com/ganlanyuan/tiny-slider#install

Demo
https://ganlanyuan.github.io/tiny-slider/demo/

*/