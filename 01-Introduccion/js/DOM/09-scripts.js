const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

//Eliminar elemento del DOM
primerEnlace.remove();
console.log(primerEnlace);

//Eliminar desde el elemento del padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
// navegacion.removeChild(navegacion.children[2]);