//Arrow function en un foreach y map
const carrito = [
    { nombre: 'Monitor Huawei Mateview GT 34 pulgadas', precio:500},
    { nombre: 'Teclado Keychron', precio:70},
    { nombre: 'Mouse Logitech MX Master 3S', precio:110},
    { nombre: 'Macbook Air M2 Spacegrey', precio:1200},
    { nombre: 'Silla Ergonomica', precio:120},
    { nombre: 'Escritorio', precio:90}
]
const nuevoArreglo = carrito.map( producto => `Articulo: ${producto.nombre} - Precio: ${producto.precio}`)
//AÑADIR ARROWFUNCTION 
const nuevoArreglo2 = carrito.forEach( producto => console.log(`Articulo: ${producto.nombre} - Precio: ${producto.precio}`));



console.log(nuevoArreglo);
console.log(`'HOLA' ${nuevoArreglo2}`);
