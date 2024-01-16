//Eventos con el Mouse

const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('click', () =>{
    console.log('Click en nav');
})

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando a la navegación');
    nav.style.backgroundColor = 'white';

})

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo a la navegación');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mousedown', () =>{
    console.log('Saliendo a la navegación');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('mouseup', () =>{ //Cuando se da click y se suelta
    console.log('Saliendo a la navegación');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () =>{ //doble click
    console.log('Saliendo a la navegación');
    nav.style.backgroundColor = 'transparent';
})

//mousedown = similar al click
//click
//dbclick = doble click
//moseup - cuando sueltas el mouse