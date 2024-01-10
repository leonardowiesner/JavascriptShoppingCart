//QUERY SELECTOR

//RETORNA MAXIMO UN ELEMENTO PERO PERMITE SELECCIONAR INCLUSO CLASES SIMILAR A CSS

const card = document.querySelector('.card');
console.log(card);
//Hay varios card's asi que retorna el primero que encuentre

//Podemos tener selectores especificos como en css

const info = document.querySelector('.premium .info') //Especificidad
console.log(info);

//Seleccionar el segundo card de hospedaje
const SegundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(SegundoCard);

//Query selector de clases
const formulario = document.querySelector('.contenido-hero #formulario')

//Query selector de elmento HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);