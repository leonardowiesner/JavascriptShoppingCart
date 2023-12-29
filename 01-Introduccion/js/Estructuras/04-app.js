const dinero = 300;
const totalapagar = 500;
const tarjeta = true;

if(dinero >= totalapagar) {
 console.log('Compra aceptada, puedes pagar')
}else if (tarjeta){
    console.log('Si puedes pagar porque tienes la tarjeta')
} else{
    console.log('Fondos insuficientes, no puedes pagar')
}
