
/*1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/

let numeroMultiplicar = 8

for (let i = 0; i <= 10; i++) {
    console.log(numeroMultiplicar * i);

}

/*2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/

let suma = 0;
let numero;


while (true) {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

    // Verificamos si se ingresó 0 para salir del bucle
    if (numero === 0) {
        break;
    }

    // Acumulamos el número ingresado a la suma total
    suma += numero;
}

// Mostramos el resultado final de la suma
console.log(`El resultado de la suma es: ${suma}`);

/*3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/

let numeroGanador = 17

while (true) {
    let numero1 = parseInt(prompt("Adivinar un número del 1 al 100"));

    if (numero1 == numeroGanador) {
        alert("Felicitaciones eres el ganador")
        break;
    } else if (numero1 > numeroGanador) {
        alert("No adivinaste, el número es menor")
    } else {
        alert("No adivinaste el número es mayor ")
    }

}

/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/

let numeros = [1, 2, 5, 7, 8, 9, 11, 13, 15, 17, 35, 67, 98, 71];
let contador;

for (let i = 0; i < numeros.length; i++) {
    contador = 0;

    for (let index = 1; index <= numeros[i]; index++) {
        if (numeros[i] % index === 0) {
            contador++;
        }
    }

    if (numeros[i] >= 2 && contador === 2) {
        console.log(`El número ${numeros[i]} es un número primo`);
    }
}

/*5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.*/

let numero1 = parseInt(prompt("Introduce un número"));

let divisor = []

for (let index = 1; index <= numero1; index++) {

    if (numero1 % index === 0) {
        divisor.push(index)
    }

}

alert(`Los divisores del ${numero1} son ${divisor}`)

/*6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array*/


let animales = ["Ballena", "Tortuga", "Pulpo", "Cangrejo", "Delfin", "Medusa", "Foca", "Tiburon", "Estrella de mar", "Pulpo"];

for (let i = 0; i < animales.length; i++) {

    console.log("Los animales acuáticos son:" + animales[i]);


}

/*7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/

let numeross = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19,];

for (let i = 0; i < numeross.length; i++) {
    let doble = numeross[i] * 2;
    console.log(`El doble de ${numeross[i]} es ${doble}`);
}

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.*/

const familia = [
    {
        nombre: 'Edinson',
        edad: 67,
        parentesco: 'Padre',
        deporte: 'futbol'
    },
    {
        nombre: 'Martha',
        edad: 60,
        parentesco: 'Madre',
        deporte: 'Trotar'
    },
    {
        nombre: 'Eloisa',
        edad: 44,
        parentesco: 'Hija',
        deporte: 'Montar bicicleta'
    },
    {
        nombre: 'Jhon',
        edad: 41,
        parentesco: 'Hijo',
        deporte: 'taekwondo'
    },
    {
        nombre: 'Liliana',
        edad: 25,
        parentesco: 'Hija',
        deporte: 'Tenis'
    }
];

for (let i = 0; i < familia.length; i++) {
    const persona = familia[i];
    console.log(`Hola, me llamo ${persona.nombre}, tengo ${persona.edad} años, soy el/la ${persona.parentesco} de la familia y el deporte que realizo es ${persona.deporte}.`);
}


/*9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] % 2 !== 0) {
        console.log(numeros2[i]);
    }
}

/*10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/

let sumaPar = 0;
let sumaImpar = 0;
let numero3;


while (true) {
    numero3 = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));

    if (numero3 === 0) {
        break;
    }

    if (numero3 % 2 === 0) {
        sumaPar += numero3;
        console.log(`Resultado suma de números PARES es: ${sumaPar}`);
    } else {
        sumaImpar += numero3;
        console.log(`Resultado suma de números IMPARES es: ${sumaImpar}`);
    }
}

alert(`El resultado de la suma de números PARES fue: ${sumaPar} y la suma de números IMPARES fue: ${sumaImpar}`);

/*11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.*/

let array2 = [23, 5, 78, 12, 45, 67, 89, 34, 22, 10];
let mayor = 0;

for (let i = 0; i < array2.length; i++) {

    if (array2[i] > mayor) {
        mayor = array2[i];
    }
}
alert(`El número más grande es: ${mayor}`);

/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.*/

let array3 = [23, 5, 78, 12, 45, 67, 89, 34, 22, 2];
let menor = 99999999;

for (let i = 0; i < array3.length; i++) {


    if (array3[i] < menor) {
        menor = array3[i];
    }
}
alert(`El número menor es: ${menor}`);


/*13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.
*/

let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
let jugador2 = prompt("Ingrese el nombre del Jugador 2:");

do {
    let opcion1 = prompt("Jugador 1 ingrese sólo “PIEDRA”, “PAPEL” ó “TIJERAS” ");
    let opcion2 = prompt("Jugador 2 ingrese sólo “PIEDRA”, “PAPEL” ó “TIJERAS” ");

    if (opcion1 == "PIEDRA" && opcion2 == "TIJERAS") {
        alert(`Gana ${jugador1} con PIEDRA sobre TIJERAS`);
        break

    } else if (opcion1 === "TIJERAS" && opcion2 == "PAPEL") {
        alert(`Gana ${jugador1}  con TIJERAS sobre PAPEL`);
        break

    } else if (opcion1 === "PAPEL" && opcion2 == "PIEDRA") {
        alert(`Gana ${jugador1}  con PAPEL sobre PIEDRA`);
        break

    } else if (opcion2 === "PIEDRA" && opcion1 == "TIJERAS") {
        alert(`Gana ${jugador2}  con PIEDRA sobre TIJERAS`);
        break

    } else if (opcion2 === "TIJERAS" && opcion1 == "PAPEL") {
        alert(`Gana ${jugador2} con TIJERAS sobre PAPEL`);
        break

    } else if (opcion2 === "PAPEL" && opcion1 == "PIEDRA") {
        alert(`Gana ${jugador2} con PAPEL sobre PIEDRA`);
        break

    }else if(opcion1 === opcion2) {
        alert("Hay un empate, se sigue jugando");
    
    }

} while (true);


/*14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.*/

let asterisco = 5;
let triangulo0 = "";

for (let i = 1; i <= asterisco; i++) {
    triangulo0 = "";
    for (let j = 0; j < i; j++) {
        triangulo0 += '*';
    }

    console.log(triangulo0);
}




/*15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado pero invertido.*/


let asteriscos = 5;
let triangulo = ""

for (let i = asteriscos; i > 0; i--) {
    triangulo = ""
    for (let j = 0; j < i; j++) {
        triangulo += '*';
    }

    console.log(triangulo);
}


/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */



let ordenado = [23, 5, 78, 12, 45, 67, 89, 34, 22, 2];
let n = ordenado.length;


for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (ordenado[j] > ordenado[j + 1]) {

            let temp = ordenado[j];
            ordenado[j] = ordenado[j + 1];
            ordenado[j + 1] = temp;
        }
    }
}

console.log("ordenado:", ordenado);




