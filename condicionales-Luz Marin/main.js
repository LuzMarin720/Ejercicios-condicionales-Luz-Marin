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

let vnombre = prompt("Ingrese nombre:");
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

if (nombre2 === "Luz" || pase === "vip") {
    console.log("Bienvenido");

} else if (Entrada === "si") {
    let usarEntrada = prompt("Desea usar entrada si/no")
    if (usarEntrada === "si") {
        console.log("Bienvenido");
    } else {
        console.log("Gracias por venir");
    }

} else {
    let deseaComprar = prompt("desea compara si/no")
    if (deseaComprar === "si") {
        let dinero = parseInt(prompt("Ingrese dinero disponible"))
        if (dinero >= 1000) {
            console.log("tiene su entrada, pase")
        } else {
            console.log("fondos insuficientes");
        }

    } else {
        console.log("Gracias por venir")
    }
}

/*8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
más eficiente.*/

let numeroIncognita = 7

let numeroIngresado = parseInt(prompt("Ingrese número de loteria"))
if (numeroIngresado === numeroIncognita) {
    console.log("Ganaste");

} else {
    if (numeroIngresado > numeroIncognita) {
        alert("El numero es mayo, intenta con otro numero")

    } else { alert("El numero es menor, intenta con otro numero") }

    numeroIngresado = parseInt(prompt("ingrese número de loteria"))

    if (numeroIngresado == numeroIncognita) {
        console.log("Ganaste");

    } else {

        if (numeroIngresado > numeroIncognita) {
            alert("El numero es mayo, intenta con otro numero")

        } else {
            alert("El numero es menor, intenta con otro numero")
        }

        numeroIngresado = parseInt(prompt("ingrese número de loteria"))

        if (numeroIngresado === numeroIncognita) {
            console.log("Ganaste");

        } else {
            console.log("perdiste, para la proxima")
        }
    }

}


/*9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
    años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
    45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
    preguntando si en realidad tiene esa edad.*/

let edad0 = parseInt(prompt("Ingrese una edad"));

if (edad0 >= 0 && edad0 <= 12) {
    console.log("Eres un infante");

} else if (edad0 >= 13 && edad0 <= 18) {
    console.log("Eres un adolescente");

} else if (edad0 >= 19 && edad0 <= 45) {
    console.log("Eres mayor Joven");

} else if (edad0 >= 46 && edad0 <= 99) {
    console.log("Eres un anciano");
} else {
    console.log("¿En realidad tienes esa edad?")

}

/* 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa.*/

let jugador1 = prompt("Ingrese sólo “PIEDRA”, “PAPEL” ó “TIJERAS” ");
let jugador2 = prompt("Ingrese sólo “PIEDRA”, “PAPEL” ó “TIJERAS” ");

if (jugador1 == "PIEDRA" && jugador2 == "TIJERAS") {
    console.log("Gana Jugador 1 con PIEDRA sobre TIJERAS");

} else if (jugador1 === "TIJERAS" && jugador2 == "PAPEL") {
    console.log("Gana Jugador 1 con TIJERAS sobre PAPEL");

} else if (jugador1 === "PAPEL" && jugador2 == "PIEDRA") {
    console.log("Gana Jugador 1 con PAPEL sobre PIEDRA");

} else if (jugador2 === "PIEDRA" && jugador1 == "TIJERAS") {
    console.log("Gana Jugador 2 con PIEDRA sobre TIJERAS");

} else if (jugador2 === "TIJERAS" && jugador1 == "PAPEL") {
    console.log("Gana Jugador 2 con TIJERAS sobre PAPEL");

} else if (jugador2 === "PAPEL" && jugador1 == "PIEDRA") {
    console.log("Gana Jugador 2 con PAPEL sobre PIEDRA");

} else if (jugador1 === jugador2) {
    console.log("Empate")

} else {
    console.log("Uno de los jugadores ha hecho trampa")
}

/*11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
Excelente elección, no lo teníamos pensado.*/

let color = prompt("Ingrese un color")
let msg;

switch (color) {
    case "Blanco":
        msg = "Falta de color";
        break;
    case "Negro":
        msg = "Falta de color";
        break;
    case "Verde":
        msg = "El color de la naturaleza";
        break;
    case "Azul":
        msg = "El color del agua";
        break;
    case "Amarillo":
        msg = "El color del sol";
        break;
    case "Rojo":
        msg = "El color del fuego";
        break;
    case "Marrón":
        msg = "el color de la tierra";
        break;
    default:
        msg = "Excelente elección, no lo teníamos pensado.";
}

console.log(`El ${color} es ${msg}`);

/*12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0.*/

let valor1 = parseInt(prompt("Ingreso un número"))
let valor2 = parseInt(prompt("Ingreso un otro número"))
let operacion = (prompt("Ingreso suma, resta, multiplicación o división"))
let resultado

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2

        break;

    case "resta":
        resultado = valor1 - valor2

        break;
    case "multiplicación":
        resultado = valor1 * valor2
        break;
    case "división":

        if (valor2 == 0) {
            resultado = "ERROR"

        } else { resultado = parseFloat(valor1 / valor2) }
        break;



}

alert(`El  resultado de la ${operacion} de ${valor1} y ${valor2} fue ${resultado}`);



/*13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.*/

let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let nrocedula = prompt("Ingrese su número de cedula");
let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");
let tiposangre = prompt("Ingrese tipo de sangre");
let ciudad = prompt("Ingrese ciudad de expedición de la cedula");
let estadocivil = prompt("Ingrese su estado civil (Soltero/a, Casado/a, Viudo/a)");

alert(`Los datos ingresados son:\n Nombre: ${nombre}\n Apellido: ${apellido}\n Número de Cedula: ${nrocedula}\n Fecha de Nacimiento: ${fechaNacimiento}\n Tipo de Sangre: ${tiposangre}\n Ciudad: ${ciudad}\n Estado Civil: ${estadocivil}`);

let confirmacion = confirm("¿Los datos ingresados son correctos?");

if (confirmacion) {
    let datos = {
        nombre: nombre,
        apellido: apellido,
        cedula: nrocedula,
        fechaNacimiento: fechaNacimiento,
        tiposangre: tiposangre,
        ciudad: ciudad,
        estadocivil: estadocivil
    };

    // Mostrar el objeto dni usando console.table
    console.log("Registro exitoso. Los datos registrado son:");
    console.table(datos);
} else {
    // En caso de que no se confirmen los datos
    console.log("Vuelva a intentarlo en 1 mes.");
}








