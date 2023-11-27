let nombre = prompt('¿Cual es tu nombre?');
if (nombre == null || nombre == '') {
    document.querySelector('.contenido').innerHTML = `Bienvenido`;
}
document.querySelector('.contenido').innerHTML = ` ${nombre} está apreniendo JavaScript Moderno`;