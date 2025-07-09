import MinHeap from "../Recursos/heaps.js";

//                         Heap Sort( Ordered Binary tree)

// * Build-max-heap: Crea el max-heap, asumiendo que el array esta desordenador.
// * Heapify: Es similar al max-heap (sirve para encontrar el valor mas grande), pero asume que parte del array ya esta ordenado. 

 
//                      Ejercicio: Min-Heap usando clase MinHeap
// A los heaps tambien se les conoce como "Colas con Prioridad"
//
// Enunciado:
// 1. Crea un MinHeap usando la clase proporcionada( MinHeap() ).
// 2. Inserta los valores: 7, 4, 9, 2 (en ese orden) usando el método insert.
// 3. Extrae la raíz (mínimo) y guárdala en la variable `root`.
// 4. Muestra el heap resultante y el valor extraído.


// Resolver Acá:

// 1. Crear MinHeap
let minHeap = new MinHeap();


// 2. Insertar valores y mostrar el heap en cada paso (opcional para debug)
minHeap.insert(7);
minHeap.insert(4);
minHeap.insert(9);
minHeap.insert(2);
console.log("Heap después de inserciones:", minHeap.heap);

// 3. Extraer el mínimo y guardarlo en `root`
const root = minHeap.extractMin()
console.log(root);


// 4. Mostrar el heap resultante
console.log("minHeap completo:", minHeap.heap)


// Resultado esperado paso a paso:
// - insert 7 → [7]
// - insert 4 → [4, 7]
// - insert 9 → [4, 7, 9]
// - insert 2 → [2, 4, 9, 7]
// - root = extractMin() → root = 2, heap = [4, 7, 9]


