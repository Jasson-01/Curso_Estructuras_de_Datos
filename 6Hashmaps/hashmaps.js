//                                  Ejercicio de Evaluación: HashMaps
// Son parecidos a los diccionarios

// Enunciado:
//  1. Crea un objeto Map vacío.
//  2. Inserta las parejas clave-valor: ("x", 10), ("y", 20), ("z", 30).
//  3. Obtén el valor asociado a la clave "y" y guárdalo en una variable.
//  4. Comprueba si existe la clave "w" y guárdalo en una variable.
//  5. Elimina la clave "x".
//  6. Obtén el tamaño del Map.


// Metodos Principales:
// Agregar: ---> Map.set(clave, valor)
// Eliminar: ---> Map.delete(clave)
// Obtener: ---> Map.get(clave)
// ¿Existe?: ---> Map.has(clave)
// tamaño(longitud) ------> Map.size;


// Resolver Acá:

// 1. Crear Map vacío
let miHashMap = new Map();
console.log(miHashMap);

// 2. Insertar x-10, y-20, z-30
miHashMap.set("x",10);
miHashMap.set("y",20);
miHashMap.set("z",30);
console.log(miHashMap);

// 3. Obtener valor de 'y' en una variable
let valorY = miHashMap.get("y");
console.log(valorY);
// 4. Comprobar existencia de 'w' en una variable
let existeW = miHashMap.has("w")
console.log(existeW);
// 5. Eliminar clave 'x'
miHashMap.delete("x");
console.log(miHashMap);

// 6. Obtener tamaño en una variable
let tamañoHashMap = miHashMap.size;
console.log(tamañoHashMap)


// Resultado esperado:
//  - 1 = Map()
//  - 2 = ("x", 10), ("y", 20), ("z", 30)
//  - 3 = → 20
//  - 4 = → false
//  - 5 = ("y", 20), ("z", 30)
//  - 6 = → 2