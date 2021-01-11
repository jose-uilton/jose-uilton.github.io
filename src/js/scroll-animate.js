// Pega todos os elementos que devem ser animados
const scrollElements = document.querySelectorAll('[data-anime-scroll]');
const animationScrollClass = 'animate';

// Função debounce para aumentar a perfomance
function debounce(func, wait) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}

// Função para verificar 
function animeScroll() {
    const pageTop = window.pageYOffset + (window.innerHeight * .75);
    scrollElements.forEach((element) => {
        element.classList.toggle('animate', pageTop > element.offsetTop);
    });
}

animeScroll();

// Adiciona um ouvidor de eventos de scroll na janela
window.addEventListener('scroll', debounce(animeScroll, 100));