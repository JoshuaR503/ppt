
// const, let, var
// const = variables cuyo valor no puede cambiar
// let = variables que pueden cambiar su valor
// var = variables globales **** 

// guardar el movimiento del usuario
let userChoice; 

const papel = document.querySelector("#papel");
const piedra = document.querySelector("#piedra");
const tijeras = document.querySelector("#tijeras");
const mensajeMovimiento = document.querySelector("#movimiento");
const mensajeComputadora = document.querySelector("#movimientoComputadora");



papel.addEventListener('click', () => {
    userChoice = "papel";
    mensajeMovimiento.textContent = `${userChoice}`;
    escojerValor ();
})

piedra.addEventListener('click', () => {
    userChoice = "piedra";
    mensajeMovimiento.textContent = `${userChoice}`;
    escojerValor ();
})

tijeras.addEventListener('click', () => {
    userChoice = "tijeras";
    mensajeMovimiento.textContent = `${userChoice}`;
    escojerValor ();

})

const escojerValor = () => {

    const valores = ["piedra", "papel", "tijera"];

    const numeroRandom = Math.random();
    const limite = valores.length;

    console.log(numeroRandom);

    console.log(numeroRandom * limite);
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(numeroRandom * limite);


    // Obtener el valor aleatorio
    const valorAleatorio = valores[indiceAleatorio]; 
    console.log(valorAleatorio);

    mensajeComputadora.textContent = `${valorAleatorio}`;
}




// arrays -> una estructura de datos que guarda informacion del mismo tipo

// estructura de datos: una manera de organizar informacion 
// array: una estructura simple donde la infomacion tiene un lugar especifico 

// array: tiene mucho espacios y cada espacio contiene informacion 
// array: cada espacio tiene un numero asociado, llamado indice







