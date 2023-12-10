const carrito = [];
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Movil",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 70
}

const producto4 = {
    nombre: "Firestick",
    precio: 35
}

let resultado;

resultado = [...carrito, producto];

console.log(resultado);

//Eliminar ultimo elemento de un arreglo
carrito.pop();
//Eliminar del inicio del arreglo
carrito.shift();
//Eliminar de cualquier parte del arreglo
carrito.splice(1,1); //(DESDE QUE POSICION, CUANTOS ELEMENTOS)
