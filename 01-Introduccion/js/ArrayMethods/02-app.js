const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//.findIndex Encontrar la posicion en una array

//Saber en que indice está abril

const indice = meses.findIndex(mes => mes === 'Abril')
console.log(indice) //Indice 3

//Si no lo encuentra retorna un -1
//Manajer esa excepcion
if (indice > 0){
    console.log(`Si se ha encontrado su mes y esta en la posicion: ${indice}`)
} else {
    console.log(`Al parecer no se ha encontrado su mes, verifique el dato  ${indice}`)
}

//encontrar el indice en una arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);