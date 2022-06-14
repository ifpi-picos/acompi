const menu = document.querySelector('.menu')
const botaoAbrirMenu = document.querySelector('.abrirMenu')
const botaoFecharMenu = document.querySelector('.fecharMenu')

botaoAbrirMenu.addEventListener('click', function () {
    menu.classList.add('menuAberto')
})
botaoFecharMenu.addEventListener('click', function () {
    menu.classList.remove('menuAberto')
})