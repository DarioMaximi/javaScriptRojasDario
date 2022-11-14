const inputs = document.querySelectorAll(".valor");
let name = prompt("Bienvenido, ingrese su nombre por favor")

const traerCambios = async () => {
    const response = await fetch("./data.json");
    const data = await response.json();

    document.querySelector('#USD')
      .dataset.cambio = data[1].valor;
    document.querySelector('#EUR')
      .dataset.cambio = data[2].valor;
    document.querySelector('#BRA')
      .dataset.cambio = data[3].valor;
    document.querySelector('#COL')
      .dataset.cambio = data[4].valor;

    inputs.forEach(input => {
        input.value = input.dataset.cambio;
    });

}

traerCambios()

function valorCambiado(input) {
    let factor = input.value / input.dataset.cambio;
    inputs.forEach(campo => {
      campo.value = (campo.dataset.cambio * factor).toFixed(2);
    })
  }

const button = document.createElement('button')

button.innerText = 'Cotización del dolar'

button.addEventListener('click', function () {
  Swal.fire(
    'Cotizaciones del día',
    'Dolar: 100 USD = ' + monedas[1].precio + ' ARG ',
    'info'
  )
} )

document.body.append (button)

const button1 = document.createElement('button')

button1.innerText = 'Cotización del euro'

button1.addEventListener('click', function () {
  Swal.fire(
    'Cotizaciones del día',
    'Euro: 100 EUR = ' + monedas[2].precio + 'ARG',
    'info'
  )
} )

document.body.append (button1)

const button2 = document.createElement('button')

button2.innerText = 'Cotización del real'

button2.addEventListener('click', function () {
  Swal.fire(
    'Cotizaciones del día',
    'Real: compra: 100 BRA = ' + monedas[3].precio + ' ARG',
    'info'
  )
} )

document.body.append (button2)

const button3 = document.createElement('button')

button3.innerText = 'Cotización del peso colombiano'

button3.addEventListener('click', function () {
  Swal.fire(
    'Cotizaciones del día',
    'Real: compra: 100 COL = ' + monedas[4].precio + ' ARG',
    'info'
)
} )

document.body.append (button3)

const monedas = [
  { id: 1, nombre: "Pesos Argentinos", precio: 1 },
  { id: 2, nombre: "Dólares", precio: 16129.03 },
  { id: 3, nombre: "Euros", precio: 16393.44 },
  { id: 4, nombre: "Reales", precio: 3030.3 },
  { id: 4, nombre: "Pesos Colombianos", precio: 3.36 },
];
localStorage.setItem("bolsa", JSON.stringify(monedas));

const cambiarValor = (nombre, precio) => {
  let bolsa = JSON.parse(localStorage.getItem("bolsa"));
  let monedas = bolsa.find(item => item.nombre === nombre);
  monedas.precio = precio;
  localStorage.setItem("bolsa", JSON.stringify(bolsa));
};

let nombre = prompt("Ingrese el nombre de la moneda");
let precio = prompt("Ingrese el monto en pesos argentinos que se necesitan para adquirir 100 unidades");
cambiarValor(nombre, precio);


