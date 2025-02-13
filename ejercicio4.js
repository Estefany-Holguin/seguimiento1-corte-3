// Creación de arrays
let frutas = ['pera', 'banano', 'fresa'];
let numeros = new Array(1, 2, 3, 4, 5);

// Acceso a elementos
console.log(frutas[0]); // 'manzana'
console.log(frutas[frutas.length - 1]); // 'naranja'

//ejemplo 2//

let equipo = ['Ana', 'Marcela', 'Mariana'];

// push(): Agrega al final
equipo.push('Eduardo');

// unshift(): Agrega al inicio
equipo.unshift('Sofía');

// pop(): Elimina y retorna el último elemento
let ultimoMiembro = equipo.pop();

// shift(): Elimina y retorna el primer elemento
let primerMiembro = equipo.shift();

// splice(): Modifica el array (eliminar/agregar elementos)
equipo.splice(1, 2, 'Fernando', 'Gloria');