let nombre = 'Estefany';
let apellido = "Holguin";
let mujer = true
let edad = 17
let saludo = `¡Hola ${nombre}!`;  // sale por consola la variable nombre

//operadores//

let a = 25;
let b = 5;

console.log(a + b);  // Suma: 30
console.log(a - b);  // Resta: 20
console.log(a * b);  // Multiplicación: 125
console.log(a / b);  // División: 5
console.log(a % b);  // Módulo: 0
console.log(a ** b); // Exponenciación: 9765625

//operadores pt 2//

let x = 5;
let y = "5";

console.log(x == y);   // true (comparación débil)
console.log(x === y);  // false (comparación estricta)
console.log(x != y);   // false
console.log(x !== y);  // true

//operadores pt 3//

let activo = true;
let autorizado = false;

console.log(activo && autorizado);  // AND
console.log(activo || autorizado);  // OR
console.log(!activo);               // NOT