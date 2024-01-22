//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaproductos = document.querySelector('#lista-productos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un producto presionando
    listaproductos.addEventListener('click', agregarProducto);

    //Elimina producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    //Vaciar el carrito al darle al Botón
    vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = [];
    limpiarHTML();
    })
}

//Funciones
function agregarProducto(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

//Elimina un producto del Carrito
function eliminarProducto(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-producto')){
        const productoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId) 
        carritoHTML(); // Iterar sobre el carrito y mostrar HTML
    }
}
//Lee el contenido del HTML al que le dimos click y extrae la info del producto
function leerDatosProducto(producto){
    //Crear un objeto con el contenido con el producto actual
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si el producto ya se encuentra en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id )
    if(existe){
        //Actualizamos la cantidad
        const productos = articulosCarrito.map( producto => {
            if(producto.id === infoProducto.id ){
                producto.cantidad++;
                return producto; //Retorna el objeto actualizado
            }else{
                return producto; //Retorna los objetos que no son duplicados
            }
        });
        articulosCarrito=[...productos];

    }else{
    //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoProducto];

    }
    console.log(articulosCarrito);
    carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML() {

    //Limpiar HTML previo
    limpiarHTML();
    //Recorre el HTML y lo genera
    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id} = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${producto.imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href ="#" class="borrar-producto" data-id="${id}" > X </a> 
        </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML() {

    //Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}