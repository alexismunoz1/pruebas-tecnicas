# ¿Qué es Stack?

Un **Stack** (pila) es una estructura de datos que sigue el principio **LIFO** (Last In, First Out - Último en Entrar, Primero en Salir). Es como una pila de platos: solo puedes agregar o quitar el plato de la parte superior.

## Características principales:

1. **LIFO**: El último elemento agregado es el primero en ser removido
2. **Operaciones limitadas**: Solo puedes acceder al elemento superior
3. **Eficiencia**: Todas las operaciones principales son O(1)

## Operaciones básicas:

```javascript
// Crear un stack (usando array)
const stack = [];

// Push - Agregar elemento al final (parte superior)
stack.push("elemento1");
stack.push("elemento2");
stack.push("elemento3");
console.log(stack); // ["elemento1", "elemento2", "elemento3"]

// Pop - Remover y retornar el último elemento
const ultimo = stack.pop();
console.log(ultimo); // "elemento3"
console.log(stack);  // ["elemento1", "elemento2"]

// Peek/Top - Ver el último elemento sin removerlo
const top = stack[stack.length - 1];
console.log(top); // "elemento2"

// Verificar si está vacío
const isEmpty = stack.length === 0;
console.log(isEmpty); // false

// Tamaño del stack
console.log(stack.length); // 2
```

## ¿Cómo funciona internamente?

1. **Array subyacente**: JavaScript usa arrays para implementar stacks
2. **Índices**: El último elemento tiene el índice más alto
3. **Puntero implícito**: El índice `length - 1` apunta al tope

## Ventajas:
- ✅ Acceso rápido al último elemento O(1)
- ✅ Operaciones simples y eficientes
- ✅ Perfecto para problemas de anidamiento
- ✅ Fácil de implementar

## Desventajas:
- ❌ Acceso limitado (solo al tope)
- ❌ No se puede acceder a elementos del medio
- ❌ Búsqueda ineficiente O(n)

## Casos de uso comunes:

### 1. **Validación de Paréntesis** (tu ejercicio actual)
```javascript
function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char in mapping) {
            // Es un paréntesis de cierre
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (mapping[char] !== topElement) {
                return false; // No coincide
            }
        } else {
            // Es un paréntesis de apertura
            stack.push(char);
        }
    }
    
    return stack.length === 0; // Stack debe estar vacío
}
```

### 2. **Evaluación de Expresiones Postfijas**
```javascript
function evaluatePostfix(expression) {
    const stack = [];
    const operators = ['+', '-', '*', '/'];
    
    for (let token of expression) {
        if (operators.includes(token)) {
            // Es un operador
            const b = stack.pop();
            const a = stack.pop();
            let result;
            
            switch (token) {
                case '+': result = a + b; break;
                case '-': result = a - b; break;
                case '*': result = a * b; break;
                case '/': result = Math.floor(a / b); break;
            }
            stack.push(result);
        } else {
            // Es un número
            stack.push(parseInt(token));
        }
    }
    
    return stack.pop();
}

// Ejemplo: "3 4 + 2 *" = (3 + 4) * 2 = 14
console.log(evaluatePostfix(["3", "4", "+", "2", "*"])); // 14
```

### 3. **Navegación de Historial (Back/Forward)**
```javascript
class BrowserHistory {
    constructor() {
        this.backStack = [];
        this.forwardStack = [];
    }
    
    visit(url) {
        this.backStack.push(url);
        this.forwardStack = []; // Limpiar forward al visitar nueva página
    }
    
    back() {
        if (this.backStack.length > 1) {
            const current = this.backStack.pop();
            this.forwardStack.push(current);
            return this.backStack[this.backStack.length - 1];
        }
        return null;
    }
    
    forward() {
        if (this.forwardStack.length > 0) {
            const next = this.forwardStack.pop();
            this.backStack.push(next);
            return next;
        }
        return null;
    }
}
```

### 4. **Deshacer/Rehacer (Undo/Redo)**
```javascript
class TextEditor {
    constructor() {
        this.content = "";
        this.undoStack = [];
        this.redoStack = [];
    }
    
    type(text) {
        this.undoStack.push(this.content);
        this.content += text;
        this.redoStack = []; // Limpiar redo al hacer nueva acción
    }
    
    undo() {
        if (this.undoStack.length > 0) {
            this.redoStack.push(this.content);
            this.content = this.undoStack.pop();
        }
    }
    
    redo() {
        if (this.redoStack.length > 0) {
            this.undoStack.push(this.content);
            this.content = this.redoStack.pop();
        }
    }
}
```

### 5. **Algoritmo de Conversión de Infijo a Postfijo**
```javascript
function infixToPostfix(infix) {
    const stack = [];
    const output = [];
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    
    for (let token of infix) {
        if (token.match(/[a-zA-Z0-9]/)) {
            // Es un operando
            output.push(token);
        } else if (token === '(') {
            // Paréntesis de apertura
            stack.push(token);
        } else if (token === ')') {
            // Paréntesis de cierre
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); // Remover '('
        } else if (precedence[token]) {
            // Es un operador
            while (stack.length > 0 && 
                   precedence[stack[stack.length - 1]] >= precedence[token]) {
                output.push(stack.pop());
            }
            stack.push(token);
        }
    }
    
    // Vaciar stack restante
    while (stack.length > 0) {
        output.push(stack.pop());
    }
    
    return output;
}

// Ejemplo: "a + b * c" → ["a", "b", "c", "*", "+"]
console.log(infixToPostfix("a + b * c"));
```

## Patrones comunes con Stack:

### Patrón 1: Emparejamiento de Símbolos
```javascript
function isValidSymbols(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (pairs[char]) {
            // Símbolo de cierre
            if (stack.pop() !== pairs[char]) return false;
        } else {
            // Símbolo de apertura
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}
```

### Patrón 2: Monotonic Stack (para problemas de "next greater element")
```javascript
function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = []; // Índices
    
    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
            const index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}
```

## Complejidad típica:

- **Push**: O(1)
- **Pop**: O(1)
- **Peek**: O(1)
- **Search**: O(n)
- **Space**: O(n) para almacenar elementos

## Cuándo usar Stack:

- ✅ Validación de paréntesis, llaves, corchetes
- ✅ Evaluación de expresiones
- ✅ Algoritmos de conversión de notación
- ✅ Navegación hacia atrás/adelante
- ✅ Algoritmos de backtracking
- ✅ Problemas de "next greater/smaller element"
- ✅ Algoritmos de parsing
- ✅ Implementación de recursión iterativa

## Errores comunes:

1. **No verificar si el stack está vacío antes de hacer pop**
2. **Olvidar limpiar el stack al final**
3. **Confundir el orden de los elementos en el stack**
4. **No manejar casos edge (string vacío, un solo carácter)**

Stack es una estructura fundamental que aparece constantemente en algoritmos y es especialmente útil para problemas que involucran anidamiento, emparejamiento y procesamiento secuencial con necesidad de "recordar" elementos anteriores.
