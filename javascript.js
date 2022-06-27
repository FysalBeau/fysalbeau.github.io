const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

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