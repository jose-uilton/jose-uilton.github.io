// Pega o array de links
let links = document.querySelectorAll('a[data-scroll="smoth"]');

// Adiciona um evento a cada um para realizar o scoll suave
links.forEach(link => {

    link.addEventListener('click', (event) => {
        event.preventDefault();
        let idEl = event.target.href.split('/');
        let destEl = document.querySelector(idEl[idEl.length - 1]);
        console.log(destEl.offsetTop);
        scrollTo({
            top: destEl.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    })

});