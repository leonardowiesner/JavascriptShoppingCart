//Modificar textos o imagenes con js
const encabezado = document.querySelector('.contenido-hero h1')
console.log(encabezado);

//Acceder al texto de este DOM especifico
console.log(encabezado.textContent);

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'

const titulo = document.querySelector('.info')
titulo.textContent = 'HOLA'

