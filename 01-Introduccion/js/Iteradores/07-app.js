// for of
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript']

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 450},
    {nombre: 'Movil', precio: 800, descuento:true},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Parlante', precio: 30},
    
]

for( let pendiente of pendientes){ // itera sobre arreglos
    console.log(pendiente);
}

for( let producto of carrito){
    console.log(producto.precio)
}