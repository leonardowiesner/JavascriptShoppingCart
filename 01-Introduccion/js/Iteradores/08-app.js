const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript']

for (let pendiente in pendientes){ // itera sobre objetos
    console.log(pendiente)
}

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for ( let caracteristica in automovil){
    console.log(`${automovil[caracteristica]}`)
}

// otra manera

const avion = {
    modelo: 'Boeing 787',
    year: 2015,
    motor: 'Rolls Royce'
}

for (let [llave,valor] of Object.entries(avion) ) {
    console.log(valor);
    console.log(llave);
}