const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('.mob-right-nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

// detect if user is in dark-mode
const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

//navigation element change style on scroll

const navElement = document.querySelector(".home-nav-mob");
const sectionOne = document.querySelector(".hero");

const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            navElement.classList.add("nav-scrolled");
        }else{
            navElement.classList.remove("nav-scrolled")
        }
        console.log(entry.target);
    })
} , sectionOneOptions);

sectionOneObserver.observe(sectionOne);