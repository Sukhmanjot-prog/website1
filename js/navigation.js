nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY)
    if (window.scroll > 240) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
