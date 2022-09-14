function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("El nombre ingresado es " + nombreIngresado)
} 

solicitarNombre();

let Moneda = prompt("El valor de que moneda desea saber?")

switch (Moneda) {
    case 'dolar':
      alert ('El dolar cotiza hoy a $295.-');
      break;
    case 'euro':
      alert ('El euro cotiza hoy a $300');
      break;
    case 'real':
      alert ('El real cotiza hoy a $30');
      break;
    default:
      alert ('Lo lamentamos, por el momento no disponemos de la cotizacion de ' + Moneda + '.');
  }
  
  alert ("¿Hay algún cambio más que quisiera hacer?");