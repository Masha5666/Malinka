// let shoppingList="";
// let maxProducts=5;

// for (let i = 0; i < 5; i++) {
//     shoppingList=shoppingList+prompt("What would you like to buy? " + maxProducts + " products left to choose")+ ", ";
//     maxProducts--;
// }

// alert("Don't forget to buy: " + shoppingList);
// let ingresarNumero = parseInt(prompt( "Ingresar numero"));
// for(let i=0;i<=10;i++) {
//     let resultado = ingresarNumero*i;
//     alert(ingresarNumero+'X'+i+'='+resultado);
// }
// let ingresarNumeroDeTazas=parseInt(prompt("Ingresar numero maximo de tazas de hoy"));
// for(let i=0;i<=ingresarNumeroDeTazas;i++) {
//     let resultado = ingresarNumeroDeTazas-1;
//     alert('Hoy podes tomar'+resultado+'tazas de cafe');
// }

// let cuantoDineroTenemos=100;
// let cuantoDineroGuardamosCadaMes=20;
// let cuantosMesesAhorrmos=12;
// for(let i=1;i<=cuantosMesesAhorrmos;i++) {
//     cuantoDineroTenemos = cuantoDineroTenemos+cuantoDineroGuardamosCadaMes;
//     alert('Tenes '+cuantoDineroTenemos+' pesos');
// }



// let i = 0;
// while (++i < 5) alert( i );
// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// let nombreIngresado = prompt("Ingresa tu nombre");
// alert ("El nombre ingresado es "+nombreIngresado);


// function solicitarNombre (){
//     let nombreIngresado = prompt("Ingresa tu nombre");
//     alert ("El nombre ingresado es "+nombreIngresado);

// }

// solicitarNombre ();
// solicitarNombre ();
// solicitarNombre ();

// function sumarDosNumeros (numero1, numero2){
// console.log (numero1+numero2);
// }
// sumarDosNumeros (2,3);
// sumarDosNumeros (13,3);



// function saludar (saludo, nombre){
//     console.log (saludo+', '+nombre);
//     }
//     saludar ('Holis', 'Masha');



// let resultado=0;
// function sumar (primerNumero,segundoNumero) {
//     resultado=primerNumero+segundoNumero
// }
// function mostrar (mensaje) {
//     console.log (mensaje)
// }
// sumar (10,12);
// mostrar (resultado);


// function calculadora(primerNumero, segundoNumero, operacion) {
//     switch (operacion) {
//         case "+":
//             return primerNumero + segundoNumero;
//         case "-":
//             return primerNumero - segundoNumero;
//         case "*":
//             return primerNumero * segundoNumero;
//         case "/":
//             return primerNumero / segundoNumero;
//         default:
//             return 0;
//     }
// }
// console.log(calculadora(10, 5, "*"));

// const maxAvailabity = 100;
// let currentAvailability = 100;

// const updateAvailability = (num, incr) => {
//     if(num<=currentAvailability){
//             if (incr==true) {
//         currentAvailability -= num;
//         alert("Today we had" + num + " more pets.");
//     } else {
//         currentAvailability += num;
//         alert("Today we had" + num + " less pets.");
//     }
//     alert("currently " + currentAvailability + "places are available")
//     } else {
//         alert("we can not accept that number of pets, only" + currentAvailability + "places left")
//     }

// }

// updateAvailability(10, true);
// updateAvailability(30, true);
// updateAvailability(70, true);
// updateAvailability(20, false);
// updateAvailability(10, true);

// let cuantosPerritosTenemos=10;
// let cuantosPodemosTener=100;
// alert(cuantosPodemosTener>cuantosPerritosTenemos);
// while(cuantosPodemosTener>cuantosPerritosTenemos) {
//     let cuantosPerritosIngresaronHoy=parseInt(prompt("Ingresa numero de perros adoptados hoy"));
//     cuantosPerritosTenemos=cuantosPerritosTenemos+cuantosPerritosIngresaronHoy;   
//     let cuantosLugaresQuedaron=cuantosPodemosTener-cuantosPerritosTenemos;
//     alert(cuantosLugaresQuedaron+' lugares quedan');
// }
    
const stockActual  = [
    {
        titulo: "Abrigo",
        precio: 100,
        cantidad: 10,
    },
    {
        titulo: "Campera",
        precio: 90,
        cantidad: 30,
    }
]

const vestidos = {
    titulo: "Vestido",
    precio: 70,
    cantidad: 50,
}

const agregarNuevoArticulo = (articulo, stock) => {
    return stock = stock.push(articulo)
}

const mostrarNombresDeArticulos = (stock) => {
    for (let i = 0; i < stock.length; i++) {
        console.log(stock[i].titulo + " - " +stock[i].cantidad)
    }
}


agregarNuevoArticulo(vestidos, stockActual)
console.log(stockActual)

mostrarNombresDeArticulos(stockActual)