//Arrow Functions
//Forma Normal
const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('Javascript', 'Node.js')
//Forma Arrow Function si es una linea , el return es implicito 

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
//Si se le pasa solo un parametro los parentesis son opcionales
 console.log(aprendiendo2('Javascript', 'Node.js'))