// Pega todos os elementos que devem ser animados
const width = window.innerWidth;
const scrollElements = document.querySelectorAll('[data-anime-scroll]');
const animationScrollClass = 'animate';
const percentScreen = width > 480 ? .75 : .90;
const timerDebounce = width > 480 ? 100 : 60;

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
    const pageTop = window.pageYOffset + (window.innerHeight * percentScreen);
    scrollElements.forEach((element) => {
        element.classList.toggle('animate', pageTop > element.offsetTop);
    });
}

animeScroll();

// Adiciona um ouvidor de eventos de scroll na janela
window.addEventListener('scroll', debounce(animeScroll, timerDebounce));