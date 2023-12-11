const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    pausar : function(){
        console.log('Pausando...')
    },
    borrar : function(id){
        console.log(`Borrando Canción ... ${id}`)
    },
    agregarplaylist : function(nombre){
        console.log(`Agregando playlist: ${nombre}`)
    },
    reproducirplaylist : function(nombre){
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.reproducir(30)
reproductor.borrar(30)
reproductor.pausar();
reproductor.agregarplaylist('Preferidas');
reproductor.reproducirplaylist('Preferidas');

