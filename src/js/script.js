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

let totalSlider = document.querySelectorAll('.banner__slide').length
const goPrev = document.querySelector('.js-goPrev')
const goNext = document.querySelector('.js-goNext')

let currentSlide = 0

document.querySelector('.banner').style.width = `calc(100vw * ${totalSlider})`

document.querySelector('.banner__controls').style.height = `${document.querySelector('.banner__sliders').clientHeight}px`

function prevImage() {
  currentSlide--
  if(currentSlide < 0){
    currentSlide = totalSlider - 1
  }
  updateMargin()
}

function nextImage() {
  currentSlide++
  if(currentSlide > (totalSlider - 1)) {
    currentSlide = 0
  }
  updateMargin()
}

function updateMargin() {
  let sliderItemWidth = document.querySelector('.banner__slide').clientWidth
  let newMargin = (currentSlide * sliderItemWidth)
  document.querySelector('.banner__sliders').style.marginLeft = `-${newMargin}px`
}

goPrev.addEventListener("click", prevImage)
goNext.addEventListener("click", nextImage)

//Executa a funcao nextImage automaticamente.
setInterval(nextImage, 3000)
