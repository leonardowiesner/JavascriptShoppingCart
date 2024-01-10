const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Acceder al texto 3 formas 

// //1. 
// console.log(encabezado.innerText);//Es sensible al css Visibility : Hidden
// //2.                                
// console.log(encabezado.textContent);//lo encuentra aunque sea Hidden
// //3
// console.log(encabezado.innerHTML);  //Trae todo el HTML

// //Se puede hacer 'CHAIN' agregarle al queryselector un acceso
// const encabezado2 = document.querySelector('.contenido-hero h1').textContent;

// //Se puede modificar el texto mediante el dom

// const encabezado3 = document.querySelector('.contenido-hero h1').textContent = '';

const imagen = document.querySelector('.card img');
imagen.scr = '../img/hacer2.jpg';

//Algunas utilidades CSS
// const titulo = document.querySelector('h1');
// titulo.style.backgroundColor = 'red';
// titulo.style.fontFamily = 'Arial';
// titulo.style.textTransform = 'Uppercase';

const card = document.querySelector('.card');
console.log(card.classList);
//Agregar clase
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card.classList);
//Eliminar Clase
card.classList.remove('segunda-clase');
console.log(card.classList);
