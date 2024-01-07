const meses = ['Enero', 'Febrero', 'Marzo','Abril'];
const meses2 = ['Agosto', 'Septiembre'];

const mesestotales = meses.concat(meses2);

console.log(mesestotales)

//Si se crea un terecer arreglo se puede poner una coma en el parametro
//meses.concat(meses2,meses3)

//Spread operator
const resultado2 = [...meses, ...meses2];

console.log(resultado2)