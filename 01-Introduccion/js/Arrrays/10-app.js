const carrito = [
    { nombre: 'Monitor Huawei Mateview GT 34 pulgadas', precio:500},
    { nombre: 'Teclado Keychron', precio:70},
    { nombre: 'Mouse Logitech MX Master 3S', precio:110},
    { nombre: 'Macbook Air M2 Spacegrey', precio:1200},
    { nombre: 'Silla Ergonomica', precio:120},
    { nombre: 'Escritorio', precio:90}
]

carrito.forEach( function(producto){
    console.log(`Articulo: ${producto.nombre} - Precio: ${producto.precio}`);
})

carrito.map( function(producto){
    console.log(`Articulo: ${producto.nombre} - Precio: ${producto.precio}`);
})

//Diferencias entre forEach y map
// forEach: no crea un nuevo arreglo, solo itera sobre el arreglo original
// map: crea un nuevo arreglo con los resultados de la iteracion