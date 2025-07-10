// Terminologias-Graphs

// path : desde "c" hasta "d"

// * Closed Path
// El nodo inicial y el nodo final son el mismo nodo.
// [a,b,c,d,a]

// * Simple Path
// No tienen ciclos(loops) o aristas paralelas.
// Un camino que no visita el mismo nodo más de una vez.
// [a,b,c,d]

// * Degree de los nodos:
// Es la cantidad de aristas que entran y salen de un nodo.

// * Directed Graph
// Un grafo dirigido es aquel en el que las aristas tienen una dirección específica.
// - in degree : Aristas que entran 
// - out degree : Aristas que salen

// Nota:
// Un loop cuenta como 2 aristas  

// Graphs Ciclicos:
// El numero de nodos es igual al numero de aristas.

// Graphs conectados:
// Un grafo es conexo si existe un camino entre cada par de nodos.

// Graphs desconectados:
// Un grafo es desconectado si no existe un camino entre al menos un par de nodos.

// Graphs completos:
// Cada nodo esta conectado a cada arista.
// Un grafo completo es aquel en el que cada par de nodos está conectado por una arista única.

// Weighted Graphs:
// Cada arista tiene un valor(peso) asignado.
// Un grafo ponderado es aquel en el que cada arista tiene un peso o costo asociado.

// Matriz Adyacente
// Utilizamos arrays o hashmaps(2D) para representar un grafos.

// Lista Adyacente
// Utilizamos linked-list para representar un grafo.