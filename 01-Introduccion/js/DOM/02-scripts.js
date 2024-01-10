//Seleccionar elementos por su clase
const header = document.getElementsByClassName('Header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Algunas clases se pueden repetir y si existen mas de una vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log('No existe')