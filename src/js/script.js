const menuOpener = document.querySelector('.header__menu-opener')
const nav = document.querySelector('.header__menu-nav')

menuOpener.addEventListener("click", function() {
    nav.classList.toggle('active-menu')
})