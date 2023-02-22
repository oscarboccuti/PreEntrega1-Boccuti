

let nombre = prompt('Ingrese nombre').toUpperCase();
let apellido = prompt('Ingrese apellido').toUpperCase();
let edad = prompt('Ingrese edad').toUpperCase();



if (edad >= 18){
    alert('Sos mayor de edad, podes ingresar.');
} else {
    alert("Sos menor de edad, no podés ingresar.")
}


alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' '+ 'Usted va a realizar una cotizacion de divisas en tiempo real.');



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
        alert('Ha ingresado un producto inexistente')
        break;
}


alert('Muchas gracias por haber realizado la cotizacion, cuando quiera puede regresar sin compromiso.')