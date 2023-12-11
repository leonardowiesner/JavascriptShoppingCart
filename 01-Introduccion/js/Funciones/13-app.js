//Reemplazando a arrow functions
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar : ()=> console.log('Pausando...'),
    borrar : id => console.log(`Borrando Canción ... ${id}`),
    agregarplaylist : nombre => console.log(`Agregando playlist: ${nombre}`),
    reproducirplaylist : nombre => console.log(`Reproduciendo playlist: ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.nuevaCancion = 'Middle';
reproductor.obtenerCancion;
reproductor.reproducir(30)
reproductor.borrar(30)
reproductor.pausar();
reproductor.agregarplaylist('Preferidas');
reproductor.reproducirplaylist('Preferidas');


const rep2 = {
    reproducir: id => console.log(`reproduciendo2 con el id ${id}`),
    pausar : () => console.log (`pausando la musica`),
    borrar : id => console.log (`Borrando la canción ${id}`)
}

rep2.reproducir('15');
rep2.pausar;
rep2.borrar('15');