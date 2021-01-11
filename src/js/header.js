// Função para fechar o menu
function closeMenu() {
    navigationMenu.style.transform = 'translate3d(-100%, 0, 0)';
    btnMenu.classList.remove('fa-times');
    btnMenu.classList.add('fa-bars');
}

// Pegando o botão e o menu e os links
let btnMenu = document.querySelector('#btn-menu');
let navigationMenu = document.querySelector('#navigation');
let linksMenu = document.querySelectorAll('.list-links__link');

// Adiciona um evento para fechar o menu a cada link
linksMenu.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Toggle para dizer se o menu está aberto ou fechado
let toggleMenu = false;

// Adiciona a lógica do botão
btnMenu.addEventListener('click', function() {

    toggleMenu = !toggleMenu;

    if (toggleMenu) {
        navigationMenu.style.transform = 'translate3d(0, 0, 0)';
        btnMenu.classList.remove('fa-bars');
        btnMenu.classList.add('fa-times');
    } else {
        closeMenu();
    }

});