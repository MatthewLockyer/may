var clickEvent = (function() {
    if ('ontouchstart' in document.documentElement === true)
      return 'touchstart';
    else
      return 'click';
})();







const navSlide = () => {
    const burgerMenu = document.querySelector('.burgerMenu');
    const navLinks = document.querySelector('.navLinks');
    const navLink = navLinks.querySelectorAll('li')
    
    // TOGGLE NAV
    burgerMenu.addEventListener(clickEvent, () => {
        navLinks.classList.toggle('navLinksShow')

        navLink.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }  else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        })
    })

    // NAV HIDE
    navLink.forEach((link) => {
        link.addEventListener(clickEvent, () => {
            navLinks.classList.toggle('navLinksShow')
    
    
        })
    })
}






const app = () => {
    navSlide()
}

app()




const heroBox = document.querySelectorAll('.heroBox')
const heroPhotos = document.querySelectorAll('.heroIMG');


heroBox.forEach((box, i) => {
    box.addEventListener(clickEvent, () => {

        heroPhotos.forEach((photo) => {
            photo.classList.remove('heroIMGShow')
        })
        heroPhotos[i].classList.add('heroIMGShow');
    })
})