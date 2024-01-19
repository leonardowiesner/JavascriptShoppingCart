//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaproductos = document.querySelector('#lista-productos');

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando
    listaproductos.addEventListener('click', agregarProducto);
}

//Funciones
function agregarProducto(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        console.log('Agregando al carrito ...')
    }
}