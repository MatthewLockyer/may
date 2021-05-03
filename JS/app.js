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
const titleBackground = document.querySelectorAll('.gradientText')
const heroBackground = document.querySelector('.hero')


heroBox.forEach((box, i) => {
    box.addEventListener(clickEvent, () => {

        heroPhotos.forEach((photo) => {
            photo.classList.remove('heroIMGShow')
        })
        heroPhotos[i].classList.add('heroIMGShow');

        box.classList.remove('heroBoxShadow')


        heroBox.forEach((bo) => {
            bo.classList.remove('heroBoxShadow')
        })

        heroBox[i].classList.add('heroBoxShadow')


        titleBackground.forEach((titleColour) => {
            if(i === 0){
                titleColour.style.background =  'linear-gradient('
                + '145deg' + ', ' + "#241cba" + ', ' + '#b7159c' + ', ' + '#b58712' + ')';
                titleColour.style.webkitBackgroundClip = "text";
                titleColour.style.webkitTextFillColor = "transparent";
            };
            if(i === 1){
                titleColour.style.background =  'linear-gradient('
                + '145deg' + ', ' + "#08633A" + ', ' + '#098A44' + ', ' + '#90C6A8' + ')';
                titleColour.style.webkitBackgroundClip = "text";
                titleColour.style.webkitTextFillColor = "transparent";
            };
            if(i === 2){
                titleColour.style.background =  'linear-gradient('
                + '145deg' + ', ' + "#77191D" + ', ' + '#A03B3B' + ', ' + '#D5595E' + ')';
                titleColour.style.webkitBackgroundClip = "text";
                titleColour.style.webkitTextFillColor = "transparent";
            };
        })


        heroBackground.classList.remove('herobckgrd1')
        heroBackground.classList.remove('herobckgrd2')
        heroBackground.classList.remove('herobckgrd3')

        if(i === 0 ){
            heroBackground.classList.add('herobckgrd1')
        };
        if(i === 1 ){
            heroBackground.classList.add('herobckgrd2')
        };
        if(i === 2 ){
            heroBackground.classList.add('herobckgrd3')
        };

    })
})