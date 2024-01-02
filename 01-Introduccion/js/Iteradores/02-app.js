//BREAK Y CONTINUE LOOP

//Crea un foor loop que al detectar el elemento #5 detenga su ejecucion
for( let i = 0; i< 10;  i++) {
    if(i === 5 ){
        console.log('Este es el 5');
        break; //Sale del loop
    }
    console.log (`Numero: ${i}`)

   }
   //Crea un foor loop que al detectar el elemento #5 imprima sus letras
for( let z = 0; z< 10;  z++) {
    if(z === 5 ){
        console.log('CINCO');
        continue; //Itera nuevamente en z
    }
    console.log (`Numero: ${z}`)

   }

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500},
    {nombre: 'Televisión', precio: 450},
    {nombre: 'Movil', precio: 800, descuento:true},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Parlante', precio: 30},
    
]
   for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`)
    }
    console.log(carrito[i].nombre)
   }