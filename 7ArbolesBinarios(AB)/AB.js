//          Ejercicio de Evaluación: Árboles (Trees) - Binary Tree básico

// Enunciado:
//    Se proporciona la clase Node:
//     class Node { constructor(val) { this.val = val; this.left = null; this.right = null; }}

//  1. Crea un nodo raíz con valor 10.
//  2. Inserta un hijo izquierdo con valor 20 y un hijo derecho con valor 30.
//  3. Inserta un hijo izquierdo al nodo 20 con valor 40.
//  4. Inserta un hijo derecho al nodo 30 con valor 50.
//  5. Realiza y muestra:
//    - Recorrido pre-order (Nodo → Izquierda → Derecha)
//    - Recorrido in-order (Izquierda → Nodo → Derecha)
//    - Recorrido post-order (Izquierda → Derecha → Nodo)

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Espacio para crear el árbol y los recorridos

// 1. Crear nodo raíz
let root = new Node(10);


// 2. Insertar hijo izquierdo (20) y derecho (30)
root.left = new Node(20);
root.right = new Node(30);



// 3. Insertar hijo izquierdo al nodo 20 (40)
root.left.left = new Node(40);


// 4. Insertar hijo derecho al nodo 30 (50)
root.right.right = new Node(50);



// 5. Recorridos:

// a) Pre-order: Nodo → Izquierda → Derecha
function preOrder(node) {
    if(!node) return;
    console.log(node.val)
    preOrder(node.left);
    preOrder(node.right);
}

// b) In-order: Izquierda → Nodo → Derecha
function inOrder(node) {
    if (!node) return;
    inOrder(node.left);
    console.log(node.val);
    inOrder(node.right);
}

// c) Post-order: Izquierda → Derecha → Nodo
function postOrder(node) {
    if (!node) return;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.val);
}

// Mostrar recorridos:
//console.log("🌟 Pre-order:");
//preOrder(root);   // Esperado: 10 20 40 30 50

//console.log("🌟 In-order:");
//inOrder(root);    // Esperado: 40 20 10 30 50

console.log("🌟 Post-order:");
postOrder(root);  // Esperado: 40 20 50 30 10