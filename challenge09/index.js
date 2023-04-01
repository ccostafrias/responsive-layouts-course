const menuBttn = document.querySelector('.menu-bttn')
const nav = document.querySelector('.nav')

menuBttn.addEventListener('click', handleMenuClick)

function handleMenuClick(e) {
    // if (nav.classList.contains('active')) {
    //     nav.classList.remove('visible')
    //     setTimeout(() => {
    //         nav.classList.remove('active')
    //     }, 500)
    // } else {
    //     nav.classList.add('active')
    //     setTimeout(() => {
    //         nav.classList.add('visible')
    //     }, 10);
    // }
    nav.classList.toggle('active')
}