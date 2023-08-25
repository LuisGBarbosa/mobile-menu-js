const btnMobile = document.getElementById('btn-mobile');


const toggleMenu = (evento) => {
    if(evento.type === 'touchstart') evento.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active') //retorna boolean
    evento.currentTarget.setAttribute('aria-expanded', active);
    
    if(active){
        evento.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    } else {
        evento.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }

    // active ? evento.currentTarget.setAttribute('aria-label', 'Abrir Menu') : 
    // evento.currentTarget.setAttribute('aria-label', 'Fechar Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);