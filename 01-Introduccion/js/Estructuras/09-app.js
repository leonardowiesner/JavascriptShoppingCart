const autenticado = true;
const puedePagar = false;
//Operador ternario = variable ? caso true : caso false
// puede ser null algun caso
console.log( autenticado && puedePagar ? 'Si está autenticado' : 'No está autenticado' );

//if anidado dentro de un ternarioc

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No no esta autenticado');