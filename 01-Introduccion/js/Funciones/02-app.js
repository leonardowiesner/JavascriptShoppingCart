//DIFERENCIA ENTRE FUNCTION DECLARATION Y FUNCTION EXPRESSION
//EN DECLARATION SE PUEDE LLAMAR A LA FUNCION ANTES DE DEFINIRLA
//EN EXPRESSION ES NECESARIO LLAMAR A LA FUNCIÍN DESPUES DE DEFINIRLA
//Declaración de función (Function Declaration)

sumar();
function sumar() {
    console.log(2 + 2);
}

//Expresión de Función (Function Expression)
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2(); //<-- Se llama despues de definirla