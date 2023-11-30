const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;

console.log(numero1);
console.log(Number.parseInt(numero1)); //parseInt convierte un string a un numero entero
console.log(Number.parseFloat(numero2)); //parseFloat convierte un string a un numero decimal

//Revisar si un numero es entero o no
console.log(Number.isInteger(numero4)); //isInteger revisa si un numero es entero o no