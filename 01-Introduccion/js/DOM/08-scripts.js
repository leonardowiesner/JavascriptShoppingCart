//TRAVERSING THE DOM

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); //Los espacios en blanco son elementos
console.log(navegacion.children);//Lista elementos reales del HTML
console.log(navegacion.firstElementChild); //Primer elemento hijo
console.log(navegacion.lastElementChild);//Ultimo elemento hijo

//Acceder a una posicion de los nodos similar a un array
// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

//Aplicando a los cards
const card = document.querySelector('.card');
console.log(card.children);
card.children[1].children[1].textContent = 'New Heading, Traversing The DOM';
console.log(card.children[1].children[1].textContent);
card.children[0].src = 'img/hacer2.jpg'; //modifica la imagen

//Traversing de hijo hacia padre mediante el DOM
//console.log(card.parentNode);
console.log(card.parentElement);

//Traversing entre elementos hermanos
console.log(card.nextElementSibling); //siguiente
//anterior elemento hermano
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling)