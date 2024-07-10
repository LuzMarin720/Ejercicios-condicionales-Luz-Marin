/* 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */

let numero1 = 10;
let numero2 = 5;

if (numero1 > numero2) {
    console.log(numero1 + " es mayor que " + numero2);
}

/* 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes.*/

let numero3 = 20;
let numero4 = 30;

if (numero3 === numero4) {
    console.log("Los numeros ingresados son iguales");
} else {
    console.log("Los numeros ingresados son diferentes");

}

/* 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales*/

let numero5 = 7;
let numero6 = 10;

if (numero5 === numero6) {
    console.log("Los numeros ingresados son iguales");
} else if (numero5 > numero6) {
    console.log(numero5 + " es mayor que " + numero6);
} else {
    console.log(numero6 + " es mayor que " + numero5);

}

/* 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
chico. */
let numero7 = 70;
let numero8 = 50;
let numero9 = 20;
let menor = numero7;

if (numero8 < menor) {
    menor = numero8;
}

if (numero9 < menor) {
    menor = numero9;
}

console.log(`El número más pequeño entre ${numero7}, ${numero8} y ${numero9} es: ${menor}`);


/* 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad.*/

let persona1 = {
    nombre: "Luz",
    edad: 30,
    altura: 175
};

let persona2 = {
    nombre: "Angelo",
    edad: 25,
    altura: 180
};

if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es la persona más alta`);
} else 
    console.log(`${persona2.nombre} es la persona más alta`);

if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es la persona que tiene mayor edad`);
} else 
    console.log(`${persona2.nombre} es la persona que tiene mayor edad`);


/* 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */
let nombre = prompt("Ingrese nombre:");
let edad = parseInt(prompt("Ingresa edad:"));
let altura = parseInt(prompt("Ingrese altura:"));
let vision = parseInt(prompt("Ingrese visión:"));

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log("Capacitado para conducir");
} else {
    console.log("No estás capacitado para conducir");
}

/* 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida.*/
let nombre2 = prompt("Ingrese su nombre:");
let pase = prompt("¿Posee pase? (vip/normal)");
let tieneEntrada = prompt("¿Posee entrada? (si/no)");
