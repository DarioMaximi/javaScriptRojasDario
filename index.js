let boton = document.getElementById("boton")

boton.addEventListener("click", () =>{
  Swal.fire({
    title: 'Estas seguro que quieres cambiar divisas?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, cambiar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        hacerCambio()
      )
    }
  })
});

function ingresarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("Bienvenid@ " + nombreIngresado + " a la casa de cambio D.R.")
}

ingresarNombre()
class Moneda{
  constructor(info){
  this.nombre = info.nombre;
  this.precioDeCompra = info.precioDeCompra;
  this.precioDeVenta = info.precioDeVenta;
  this.imagen = info.imagen;
}
}
const moneda = [];

moneda.push (new Moneda({nombre: "dolar", precioDeCompra: 275, precioDeVenta: 290, imagen: "./images/dolar.png"}));
moneda.push (new Moneda({nombre: "euro",precioDeCompra: 285, precioDeVenta: 305, imagen: "./images/euro.png"}));
moneda.push (new Moneda({nombre: "real",precioDeCompra: 40, precioDeVenta: 60, imagen: "./images/real.png"}));

function hacerCambio(){
    let cambio = prompt("El valor de que moneda desea saber?").toLowerCase()


switch (cambio) {
    case (moneda[0].nombre):
      alert ('Precio de compra: ' + moneda[0].precioDeCompra + ' Precio de venta: ' + moneda[0].precioDeVenta );
      let cantidad = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad + ' dolares, vas a obtener ' + cantidad * moneda[0].precioDeCompra +' pesos. Cambiando ' + cantidad +' pesos, vas a obtener ' + cantidad / moneda[0].precioDeVenta + ' dolares.');
      break;
    case (moneda[1].nombre):
      alert ('Precio de compra: ' + moneda[1].precioDeCompra + ' Precio de venta: ' + moneda[1].precioDeVenta );
      let cantidad1 = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad1 + ' euros, vas a obtener ' + cantidad1 * moneda[1].precioDeCompra +' pesos. Cambiando ' + cantidad1 +' pesos, vas a obtener ' + cantidad1 / moneda[1].precioDeVenta + ' euros.');
      break;
    case (moneda[2].nombre):
      alert ('Precio de compra: ' + moneda[2].precioDeCompra + ' Precio de venta: ' + moneda[2].precioDeVenta );
      let cantidad2 = prompt('Que cantidad queres cambiar?');
      alert ('Cambiando ' + cantidad2 + ' reales, vas a obtener ' + cantidad2 * moneda[2].precioDeCompra +' pesos. Cambiando ' + cantidad2 +' pesos, vas a obtener ' + cantidad2 / moneda[2].precioDeVenta + ' reales.');
      break;
    default:
      alert ('Lo lamentamos, por el momento no disponemos de la cotizacion de ' + cambio + '.');
      }
    }
  
  

  /* incorporando array  */
  

  let monedas = ["dolar", "euro", "real"]

  console.log(monedas.length);

  /* llamando productos creados para mostrar en el inicio */

  let imagenesInicio = document.getElementById("imagenesInicio")

  moneda.forEach((moneda) => {
    let productoCarrousel = document.createElement("div")
    productoCarrousel.innerHTML = `
    <div class="card" id="tarjertas" style="width: 18rem;">
  <img class="card-img-top" id="tarjetaProducto" src="${moneda.imagen}" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">${moneda.nombre}</h2>
    <p class="card-text">"Precio de Compra: ${moneda.precioDeCompra}"</p>
    <p class="card-text">"Precio de Venta: ${moneda.precioDeVenta}"</p>
  </div>
</div>
   `
imagenesInicio.append(productoCarrousel)

})