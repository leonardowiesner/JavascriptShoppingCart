const carrito = [
    { nombre: 'Monitor Huawei Mateview GT 34 pulgadas', precio:500},
    { nombre: 'Teclado Keychron', precio:70},
    { nombre: 'Mouse Logitech MX Master 3S', precio:110},
    { nombre: 'Macbook Air M2 Spacegrey', precio:1200},
    { nombre: 'Silla Ergonomica', precio:120},
    { nombre: 'Escritorio', precio:90}
]

// for(let i = 0; i < carrito.length; i++){
//     console.log(`Articulo: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
// }

carrito.forEach( function(producto){
    console.log(`Articulo: ${producto.nombre} - Precio: ${producto.precio}`);
})