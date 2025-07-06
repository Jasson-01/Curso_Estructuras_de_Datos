//              Ejercicio de Evaluación: Deques (Double-Ended Queues)
// Cola doblemente enlazada con doble extremo: podés agregar y quitar de ambos lados.

// Enunciado:
//  1. Crea un deque vacío.
//  2. Añade al final 20 y al inicio 15.
//  3. Elimina el primer elemento y guárdalo en una variable.
//  4. Elimina el último elemento y guárdalo en una variable.
//  5. Comprueba la longitud restante.

// Metodos Principales:
// addFirst: .unshift(elem);
// addLast: .push(elem)
// removeFirst: .shift()
// removeLast: .pop()  

// Resolver Acá:

// 1. Crear deque vacío
let dequeue = []
console.log(dequeue)

// 2. Añadir al final (20) y al inicio (15)
dequeue.push(20);
dequeue.unshift(15);
console.log(dequeue)
// 3. Eliminar el primer elemento y guardarlo en una variable
let removeFirst = dequeue.shift()
console.log(dequeue);

// 4. Eliminar el último elemento y guardarlo en una variable
let removeLast = dequeue.pop();
console.log(dequeue);
// 5. Obtener longitud restante
let longitudDequeue = dequeue.length
console.log(longitudDequeue);


// Resultado esperado:
//  - 1 = []
//  - 2 = [15,20]
//  - 3 = [20]
//  - 4 = []
//  - 5 = 0