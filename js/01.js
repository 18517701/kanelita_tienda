/* const success = document.querySelector('.acciones');

window.this.success.addEventListener('click', () => {

    console.log('tocando para agregar al carrito')
    

});
 */


/* const agregarCarrito = document.querySelector('.comprar');

    agregarCarrito.addEventListener('click', () => {
    
    console.log('tocando para agregar al carrito')
    
    }); */
    
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];//inicia como un arreglo vacio

cargarEventListeners();
function cargarEventListeners() {
listaProductos.addEventListener('click', agregarProducto);
}

function agregarProducto(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
    const productoSeleccionado = e.target.parentElement.parentElement;
    leerDatosProducto(productoSeleccionado);
    }
}
function leerDatosProducto(producto) {
    console.log(producto);
    
    const infoProducto = {
    
    imagen : producto.querySelector('img').src,
    titulo : producto.querySelector('h5').textContent,
    precio: producto.querySelector('.precio').textContent,
    id: producto.querySelector('button').getAttribute('data-id'),
    cantidad : 1
    
    }
   articulosCarrito = [...articulosCarrito, infoProducto];
   //con el spread operator se crea una copia del arreglo y se agrega el nuevo elemento
    console.log(articulosCarrito);
    
carritoAdd();

}

function carritoAdd(){

    articulosCarrito.forEach( producto => {
    
        const row = document.createElement('tr');
    
        row.innerHTML = `
        <td>
                <img src="${producto.imagen}" width="60">
            <td>${producto.titulo} </td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
        </td>
        
        `;
        //agregar en el HTML el contenido del carrito
        contenedorCarrito.appendChild(row);
    });
    
}


function mostrarFoto(img){

    
var modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  
  var imgGrande = document.createElement("img");
  imgGrande.src = img.src.replace(/(\.[\w\d_-]+)$/i, "../src/manillas/PHOTO-2023-01-24-23-15-28-grande$1.jpg");
  imgGrande.style.maxWidth = "80%";
  imgGrande.style.maxHeight = "80%";

// Agregar la imagen ampliada a la ventana modal
modal.appendChild(imgGrande);

// Agregar la ventana modal al documento HTML
document.body.appendChild(modal);


}
