const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;


//Destructuring
// const { precio } = producto;
// const { nombre, precio, disponible } = producto;
// console.log(nombre,precio, disponible);

//Destructuring con arreglos
const numeros = [10,20,30,40,50];

const [primero] = numeros;
console.log(primero);