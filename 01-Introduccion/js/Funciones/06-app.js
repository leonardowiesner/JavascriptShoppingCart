
function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Leo','Wiesner');
saludar(); //Output Hola Desconocido