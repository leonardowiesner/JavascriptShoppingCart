//'Crear elemento a partir del DIV'
const enlace = document.createElement('a');
//Agregando texto
enlace.textContent = 'Nuevo Enlace';
//Agregando HREF
enlace.href = '/Nuevo-Enlace';
enlace.target = '_blank';
//Mostrarlo y en donde
console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //Metodo que agrega un hijo a nav
navegacion.insertBefore(enlace,navegacion.children[1]);

enlace.onclick = miFuncion;

function miFuncion (){
    alert('Diste Click')
}

//Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de reggaeton'
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 Por persona'
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)
console.log(parrafo3);

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'
imagen.classList.add('img-fluid');
imagen.alt = 'Texto Alternativo'

//Crear card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);
//asignar info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);