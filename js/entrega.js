
let nombre = prompt('Ingrese nombre').toUpperCase();
let apellido = prompt('Ingrese apellido').toUpperCase();



while (true) {
    let edad = prompt("Ingrese su edad:");
  
    if (edad === null) {
      alert("No se ingresó ninguna edad. Por favor, inténtelo nuevamente.");
    } else if (isNaN(edad)) {
      alert("El valor ingresado no es un número. Por favor, inténtelo nuevamente.");
    } else if (edad < 18) {
      alert("Lo siento, debe ser mayor de edad para ingresar.");
      continue;
    } else {
        alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' '+ 'Usted va a realizar una cotizacion de divisas en tiempo real.');
      break;
    }
  }


const COTIZACION_EURO = 400;
const cotizarEuro = (pesos) => pesos / COTIZACION_EURO;
const cotizarPesos = (euro) => euro * COTIZACION_EURO;
let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - EUROS A PESOS \n 2 -  PESOS A EUROS ");
let valor = prompt("VALOR");
switch (seleccion) {
    case "1":
        alert(cotizarPesos(valor));
        break;
    case "2":
        alert(cotizarEuro(valor));
        break;
    default:
        alert('Ha ingresado una divisa inexistente, vuelva a repetir el proceso')
        break;
}


alert('Muchas gracias por haber realizado la cotizacion, cuando quiera puede regresar sin compromiso.')