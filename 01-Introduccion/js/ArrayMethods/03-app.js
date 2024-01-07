const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Funcion reduce
//Primero con un foreach
let total = 0;
carrito.forEach( producto => total += producto.precio);

console.log(total);

//Con un reduce      valor acumulativo, valor actual
let resultado = carrito.reduce( (total, producto)  => total + producto.precio, 0)
console.log(resultado);

const numbers = [2,4,6,8,10];
const res = numbers.reduce((acc, item) =>{
    return acc = acc + item;
}, 0);

console.log(res);

const strings = ['Mi', 'nombre', 'es', 'Marcos'];

const res2 = strings.reduce((acc,item) =>{
    return acc += ' ' + item;
}, 'Hola! ');
console.log(res2);

const objs = [
    {nombre: 'Marcos', edad:15},
    {nombre: 'Lena', edad:10}
]

const res3 = objs.reduce ((acc, item)=>{
    return acc += item.edad
},0)
console.log(res3)