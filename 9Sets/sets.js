//                           Ejercicio de Evaluación: Sets

// - No hay duplicados
// Metodos Principales:
// .union
// .Intersección
// .diferencia


// Enunciado:
// 1. Crea dos Sets: X y Y.
// 2. En X añade los valores: 5, 6, 6, 7
// 3. En Y añade los valores: 6, 7, 8
// 4. Muestra el tamaño de X
// 5. Comprueba si X contiene el 6
// 6. Elimina 7 de X
// 7. Calcula:
//    - Unión de X y Y → setUnion
//    - Intersección de X y Y → setIntersection
//    - Diferencia X - Y → setDifference
//


// Resolver Acá:

// 1. Crea dos Sets: X y Y
let X = new Set();
let Y = new Set();

// 2. En X añade los valores: 5, 6, 6, 7
X.add(5);
X.add(6);
X.add(6);
X.add(7);
console.log(X);

// 3. En Y añade los valores: 6, 7, 8
Y.add(6);
Y.add(7);
Y.add(8);
console.log(Y)

// 4. Muestra el tamaño de X
let size = X.size;
console.log(size);


// 5. Comprueba si X contiene el 6
let contiene6 = X.has(6);
console.log(contiene6);


// 6. Elimina 7 de X
X.delete(7);
console.log(X);


// 7. Calcula:
//    1) Intersección de X y Y → setIntersection:
const setUnion = new Set([...X,...Y]);
console.log(setUnion); 

//    2) Diferencia X - Y → setDifference:
const setDifference = new Set([...X].filter( a => !Y.has(a)))
console.log(setDifference);

//    3) Intersección:
const setIntersection = new Set([...X].filter( a => Y.has(a)));
console.log(setIntersection);


// Resultado esperado:
// - X = {5,6.7}
// - Y = {6,7,8}
// - sizeX = 2
// - has6 = true
// - setUnion = {5,6,7,8}
// - setIntersection = {6}
// - setDifference = {5}