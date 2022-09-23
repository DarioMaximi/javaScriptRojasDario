function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 

solicitarNombre();

class Moneda{
  constructor(nombre, precioDeCompra, precioDeVenta){
  this.nombre = nombre;
  this.precioDeCompra = precioDeCompra;
  this.precioDeVenta = precioDeVenta;
}
}

const Moneda1 = new Moneda("dolar", 275, 290);
const Moneda2 = new Moneda("euro", 285, 305);
const Moneda3 = new Moneda("real", 40, 60);

let cambio = prompt("El valor de que moneda desea saber?")

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
      alert ('Lo lamentamos, por el momento no disponemos de la cotizacion de ' + Moneda + '.');
  }
  
  alert ("¿Hay algún cambio más que quisiera hacer?");

  /* incorporando array  */
  

  let monedas = ["dolar", "euro", "real"]

  console.log(monedas.length);