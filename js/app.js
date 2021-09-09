//Hamburger menu toggle
const openBtn = document.getElementById('nav-btn')
const openMenu = document.getElementById('nav-menu')
const mobileNav = document.getElementById('mobile-nav')
const openNav = () => {
    openMenu.classList.toggle('active')

    if (openMenu.classList.contains('active')) {
        mobileNav.classList.add('active')
    } else {
        mobileNav.classList.remove('active')
    }
}

openBtn.addEventListener('click', openNav)


// //Initializing flickity carousel
// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity(elem, {
//     // options
//     cellAlign: 'left',
//     autoPlay: true,
//     freeScroll: true,
//     wrapAround: true
// });

var flkty = new Flickity('.main-carousel', {
    // options
    wrapAround: true,
    autoPlay: true
});


//Modal functionality
const modalOpenBtn = document.getElementById('open-modal')
const modalCloseBtn = document.getElementById('close-modal')
const overlay = document.getElementById('overlay')

modalOpenBtn.addEventListener('click', ()=> {
    console.log('hello')
    overlay.classList.add('open')
})

modalCloseBtn.addEventListener('click', ()=> {
    overlay.classList.remove('open')
})