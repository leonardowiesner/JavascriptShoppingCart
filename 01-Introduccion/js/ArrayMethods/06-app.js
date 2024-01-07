const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//EVERY todos los elementos de un arreglo deben cumplir esta condicion para
//Retornar TRUE

const resultado = carrito.every( producto => producto.precio < 1000);
console.log (resultado); //Si todos los precios son mayores a 1000 entonces TRUE

//para revisar al menos uno que cumpla la condicion es .some