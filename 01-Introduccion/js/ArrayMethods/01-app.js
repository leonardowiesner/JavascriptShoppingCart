const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//.some
//Comprobar si existe un valor determinado en un arreglo

meses.forEach((mes)=>{
    console.log(mes)

    //Revisar que enero exista

})

const resultado = meses.includes('Enero'); 'True'
//console.log(resultado)

//en arreglo de objetos se utiliza .some
const existe = carrito.some ((articulo)=>{
    return articulo.nombre ==='Celular'
})
console.log(existe)

//En un arreglo unidimensional no de objetos con .some
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2)

//Some soporta ambas estructurras pero includes no