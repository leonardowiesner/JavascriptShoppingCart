//Eventos con el teclado
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () =>{
    console.log('escribiendo...');
})


busqueda.addEventListener('keyup', () =>{ //se dispara despues de soltar
    console.log('escribiendo...');
})

busqueda.addEventListener('blur', () =>{ //se dispara despues de entrar y salir
    console.log('escribiendo...');
})

busqueda.addEventListener('copy', () =>{ //se dispara despues de copiar
    console.log('escribiendo...');
})

busqueda.addEventListener('paste', () =>{ //se dispara despues de pegar
    console.log('escribiendo...');
})

busqueda.addEventListener('cur', () =>{ //se dispara despues de cortar
    console.log('escribiendo...');
})
//Leer lo que el usuario está escribiendo
busqueda.addEventListener('input', (e) =>{ //se dispara todos los anteriores
    if (e.target.value === ''){
        console.log('falló la validación');
    }
    console.log(e.target.value); //menos blur
})