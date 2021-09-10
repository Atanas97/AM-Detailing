//Hamburger menu toggle
const openBtn = document.getElementById('nav-btn')
const openMenu = document.getElementById('nav-menu')
const mobileNav = document.getElementById('mobile-nav')
const heroHeadings = document.querySelector('.hero-headings')
const openNav = () => {
    openMenu.classList.toggle('active')

    if (openMenu.classList.contains('active')) {
        mobileNav.classList.add('active')
        heroHeadings.style.bottom = '10%'
        heroHeadings.style.transition = '550ms ease-in-out'
    } else {
        mobileNav.classList.remove('active')
        heroHeadings.style.bottom = '20%'
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
const iframe = document.getElementById('iframe')
modalOpenBtn.addEventListener('click', ()=> {
    overlay.classList.add('open')
})

modalCloseBtn.addEventListener('click', ()=> {
    overlay.classList.remove('open')
    stopVideo();
})
function stopVideo() {
  var currentIframe = document.querySelector('#iframe');
  currentIframe.src = currentIframe.src;
}