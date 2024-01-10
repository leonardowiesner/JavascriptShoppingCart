//  Seleccion por id

const formulario = document.getElementById('formulario');
console.log(formulario);

//¿ Que pasa si seleccionamos un id que no existe en el dom ?

const formne = document.getElementById('no-existe');
console.log(formne); //Representa NULL

//¿Que pasa cuando tengo dos ids identicos?
//Retorna el primero que encuentre