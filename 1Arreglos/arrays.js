//                                                        Ejercicio 1: Listas / Arrays
// Enunciado:
// Dado un array de numeros [10, 20, 30]:
//       1. Agrega el numero 40 al finally.
//       2. Elimina el ultimo elemento y guardalo en una variable.
//       3. Comprueba si el array contiene el numero 20.
//       4. Obten la longitud del array.

// Ej_1
let numeros = [10, 20,30];
numeros.push(40)
console.log(numeros)
// Ej_2
let ultimoElemento = numeros.pop()
console.log(ultimoElemento)
// Ej_3

console.log(numeros.includes(20))

// Ej_4
let longitudArray = numeros.length
console.log(longitudArray)
