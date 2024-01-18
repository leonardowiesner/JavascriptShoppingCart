//Evento submit a formulario

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Previene la acción que realizaria lo que requerimos

    console.log('Buscando...')
    console.log(e);
    console.log(e.target.action); //Url objetivo
})
//Si se quiere hacer por una función no anonima es importante que se 
//especifique el parametro
function validarFormulario(e) {
    e.preventDefault();

    console.log('Buscando...')

    console.log(e.target.action);
}