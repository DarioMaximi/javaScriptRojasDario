let boton = document.getElementById("boton")
let evento = "click"

boton.addEventListener(evento, hacerCambio)

function ingresarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("Bienvenid@ " + nombreIngresado + " a la casa de cambio D.R.")
}

ingresarNombre()
class Moneda{
  constructor(nombre, precioDeCompra, precioDeVenta){
  this.nombre = nombre;
  this.precioDeCompra = precioDeCompra;
  this.precioDeVenta = precioDeVenta;
}
}

const Moneda1 = new Moneda("dolar", 275, 290,);
const Moneda2 = new Moneda("euro", 285, 305,);
const Moneda3 = new Moneda("real", 40, 60,);

function hacerCambio(){
    let cambio = prompt("El valor de que moneda desea saber?").toLowerCase()


switch (cambio) {
    case Moneda1.nombre :
      alert ('Precio de compra: ' + Moneda1.precioDeCompra + ' Precio de venta: ' + Moneda1.precioDeVenta );
      let cantidad = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad + ' dolares, vas a obtener ' + cantidad * Moneda1.precioDeCompra +' pesos. Cambiando ' + cantidad +' pesos, vas a obtener ' + cantidad / Moneda1.precioDeVenta + ' dolares.');
      break;
    case Moneda2.nombre:
      alert ('Precio de compra: ' + Moneda2.precioDeCompra + ' Precio de venta: ' + Moneda2.precioDeVenta );
      let cantidad1 = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad1 + ' euros, vas a obtener ' + cantidad1 * Moneda2.precioDeCompra +' pesos. Cambiando ' + cantidad1 +' pesos, vas a obtener ' + cantidad1 / Moneda2.precioDeVenta + ' euros.');
      break;
    case Moneda3.nombre:
      alert ('Precio de compra: ' + Moneda3.precioDeCompra + ' Precio de venta: ' + Moneda3.precioDeVenta );
      let cantidad2 = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad2 + ' reales, vas a obtener ' + cantidad2 * Moneda3.precioDeCompra +' pesos. Cambiando ' + cantidad2 +' pesos, vas a obtener ' + cantidad2 / Moneda3.precioDeVenta + ' reales.');
      break;
    default:
      alert ('Lo lamentamos, por el momento no disponemos de la cotizacion de ' + cambio + '.');
      }
    }
  
  

  /* incorporando array  */
  

  let monedas = ["dolar", "euro", "real"]

  console.log(monedas.length);

  /* Imagenes de inicio */

  let div = document.getElementById("imagenesInicio")
  
  Moneda.forEach(moneda => {
    let productoCarrousel = document.createElement("div")
    productoCarrousel.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" id="tarjetaProducto" src="${producto.imagen}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${producto.nombre}</h2>
    <p class="card-text">${producto.descripcion}</p>
    <a href="#" class="btn btn-primary">Adquirir</a>
  </div>
</div>
   `
div.append(productoCarrousel)

})