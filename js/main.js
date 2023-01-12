// Show Menu
const navMenu =document.getElementById("nav-menu");
const navClose =document.getElementById("nav-close");
const menuBar =document.getElementById("menu-bar");
 
if(menuBar){
    menuBar.addEventListener("click", () =>{
        navMenu.classList.add('show-menu')
        console.log("hello")
    });
} 
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove('show-menu')
    });
} 
//*==========Show Search Form===============*/
const search= document.querySelector(".search-icon") ,
      searchForm = document.querySelector("#search-from"),
      closeForm =document.querySelector("#close-search-form");
if(search){
    search.addEventListener("click", () =>{
        searchForm.classList.add('show-search')
    })
} 
if(closeForm){
    closeForm.addEventListener("click", () =>{
        searchForm.classList.remove('show-search')
    })
} 
/* ============Show Cart From=============*/ 
const cartLink= document.querySelector("#cart") ,
      cartSection = document.querySelector("#section-cart"),
      closeCart =document.querySelector("#close-cart");
if(cartLink){
    cartLink.addEventListener("click", () =>{
        cartSection.classList.add('show-cart')
    })
} 
if(closeCart){
    closeCart.addEventListener("click", () =>{
        cartSection.classList.remove('show-cart')
    })
}
/*=========Add Diches Of The Cart=========*/ 
(function(){
    const popularBtn =document.querySelectorAll('.popular-button');

    popularBtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            // console.log(e.target);
            if(e.target.parentElement.classList.contains('popular-button')){
                let fullpath=
                   e.target.parentElement.parentElement.firstElementChild.src;
                let pos =fullpath.indexOf("image")+5;
                let partPath =fullpath.slice(pos);
                console.log(partPath);

            }
        });
    });

})();

/*=============Scroll sections active link========== */
const sections= document.querySelectorAll('section[id]')

const scrollActive =() =>{
    const scrollY =window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop-50,
        sectionId = current.getAttribute('id'),
        sectionsClass =document.querySelector('.nav-list a[href*='+sectionId+']')
        
    if(scrollY> sectionTop && scrollY <=sectionTop+ sectionHeight){
        sectionsClass.classList.add('active-link')
    }   else{
        sectionsClass.classList.remove('active-link')
    } 
    });
};
window.addEventListener('scroll',scrollActive);




// /*==============Show Scroll Up ===========*/
const scrollUp =() =>{
    const scrollUp =document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


/* ==========dark Light Theme=========*/
const ThemeButton =document.getElementById('moon-icon');
const darkTheme ='dark-theme'
const iconTheme ='ri-sun-line'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedicon =localStorage.getItem('selected-icon')

const getCurrentTheme =() => document.body.classList.contains(darkTheme)? 'dark' :'light'
const getCurrentIcon =() => ThemeButton.classList.contains(iconTheme)? 'ri-moon-line' :'ri-sun-line'

if(selectedTheme){

    document.body.classList[selectedTheme==='dark'? 'add' : 'remove'](darkTheme)
    ThemeButton.classList[selectedicon==='ri-moon-line'?'add' :'remove'](iconTheme)
}
ThemeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    ThemeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())

})
/* ==========Scroll Reveal=========*/
const sr= ScrollReveal({
    origin: "top",
    distance :"60px",
    duration: 2500,
    delay: 400,
    // reset:true //a
})
sr.reveal(`.image-home,.newsletter-container,.col,.footer-img`)
sr.reveal(`.content`,{origin: "bottom"})
sr.reveal(`.about-img , .recently-img`,{origin: "left"})
sr.reveal(`.about-data , .recently-data`,{origin: "right"})
sr.reveal(`.popular-card`,{interval: 100})

// loader
function loader(){
    document.querySelector('.container-loader').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,4000);
}
window.onload= fadeOut;



