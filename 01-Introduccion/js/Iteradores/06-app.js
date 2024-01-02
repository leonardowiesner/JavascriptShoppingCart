const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript']

pendientes.forEach( (pendiente,index) => {
    console.log(`${index}: ${pendiente}`)
})


const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 450},
    {nombre: 'Movil', precio: 800, descuento:true},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Parlante', precio: 30},
    
]
const newArray = carrito.forEach(producto => producto.nombre);

const newArray2 = carrito.map( producto => producto.nombre);

console.log(newArray); // No se imprime porque es forEach
console.log(newArray2);