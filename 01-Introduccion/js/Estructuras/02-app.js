const puntaje = 1000; //asignacion

if(puntaje == 1000){ //comparacion
    console.log('Si es igual a 1000')
}else{
    console.log('No es igual');
}

//!= diferente

if(puntaje != 1000){
    console.log('Si es diferente')
}

// === comparador estricto por tipo de dato tambien
if(puntaje === 1000){
    console.log('Si es del mismo tipo de dato y es mil')
}
const puntaje2 = 1;

if (puntaje2 === 1000){
    console.log('Si es del mismo tipo (number) y es mil')
}else{
    console.log('No es del mismo tipo ')
}

//para saber el tipo de dato

console.log(typeof puntaje2); //String
console.log(typeof puntaje);  //Number

//PARA COMPARAR EL DATO ESCTRICATMENTE DIFERENTE

if (puntaje2 ==! "1000"){
    console.log("Si es diferente en cuanto a tipo de dato ")
}else if (puntaje2 === "1000"){
    console.log("Es igual en cuanto a tipo de dato y valor")
}
