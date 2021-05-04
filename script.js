// alert('Hola numdo)
console.log('Hola mundo');


// comentario de linea 
/* 
comentario de 
varias lineas 
*/

console.log('Linea uno');
console.log('Linea dos');

// Variables

let a = 5;
console.log(a);

// Mensajes
let nombre = Luz;
console.log('Hola mundo',nombre);
console.log("Hola mundo"+nombre);
console.log(`Hola mundo ${nombre}`);

let nombreCompleto = 'Luz Villar';
let nombre_completo = 'Luz villar';

let $ = 5;

// Constantes 

const PI = 3.1416;
const COLOR = '';

// const codigo = getId();

// Tipos de datos
// Dinamicamente tipado
let x;
x = 25;
x = 2.2524;
x = "Hola";
x = true;

// Tipo de Dato
let n = 4;
n = 4.2526
let num = n;
num = 5;
console.log(n);
console.log(num);

// Valores numericos especiales Infinity NaN
console.log(1/0);
console.log("Hola" / 2);

// Tipo de dato BigInt
// mayores (2^52 - 1) 9.007.199.254.740.991

num = 4444512345677898n;

//Tipo String
nombre = "luz";
let mensaje = 'Hola mundo';
mensaje = "Hola mundo";
mensaje = `Hola mundo`

// Tipo Boolean
let verdadero = true;
let falso = false;

// valor null
num = null;
// en js null no significa un objeto inxistente
// un valor especial que representa nada, vacio o valor desconocido 

// valor undefined
// valor especial que significa no asignado 
let prueba;
console.log(prueba);

// typeof typeof(variable)
num = 4;
console.log(typeof(num));
num = 4.5;
console.log(typeof(num));
num = "h"/2;
console.log(typeof(num));
num = 1/0;
console.log(typeof(num));
num = true;
console.log(typeof(num));
num = null;
console.log(typeof(num)); //error de js

// Conversion de datos

let cadena = "123";
let conversion = Number(cadena);
console.log(`El valor de ${conversion} es de tipo ${typeof(conversion)}`);

/* Tabla de conversiones Number
undefined = NaN
null -> 0
true -> 1
false -> 0
string '' -> 0 
string 'Hola' -> NaN
*/

// Conversiones numericas ocurren automaticamente en funciones matematicas y expresiones

let conversion = '6'/ 2;
let conversion = '6'* 2;
let conversion = '6'*'2';
let conversion = '6' + '2'; // el + prevalece la concatenacion de la sum
let conversion = null * true;
let conversion = true * true;

console.log(`El valor de ${conversion} es de tipo ${typeof(conversion)}`);

/* Conversion en booleno
undefined = false
null -> false
string '' -> false
string 'Hola' -> true
0 -> false
NaN -> false 
 ' ' -> true
 [1-x]->true 
*/

// Conversion implicita en bloque if y while
let conversion = Boolean('Hola');
console.log(`El valor de ${conversion} es de tipo ${typeof(conversion)}`);

// Comparaciones 
// al comprar valores de difentes tipos js convierte los valores a numeros 
// Toda compracion con NaN es falsa
// el undefined y el null son iguales entre si pero no a nimgun otro valor {igualacion no estricta}
console.log(2 > true); // true
console.log('2' > 1); // true 
console.log('Hola' > 0); // false
console.log('Hola' < 0); // false
console.log('Hola' == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null == 0); // false