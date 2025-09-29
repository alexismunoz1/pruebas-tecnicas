**Two Pointers** (Dos Punteros) es una de las estrategias más importantes en algoritmos:

## ¿Qué es Two Pointers?

Two Pointers es una técnica algorítmica que utiliza dos punteros (índices) que se mueven a través de una estructura de datos, generalmente un array, para resolver problemas de manera eficiente. Los punteros pueden moverse en la misma dirección o en direcciones opuestas.

## Tipos de Two Pointers

### 1. **Punteros que se mueven en direcciones opuestas**
- Un puntero comienza al inicio, otro al final
- Se mueven hacia el centro hasta encontrarse
- **Complejidad temporal**: O(n)
- **Complejidad espacial**: O(1)

### 2. **Punteros que se mueven en la misma dirección**
- Ambos punteros comienzan al inicio
- Se mueven a diferentes velocidades (slow/fast)
- **Complejidad temporal**: O(n)
- **Complejidad espacial**: O(1)

## Casos de Uso Comunes

### 1. **Array Ordenado - Búsqueda de Pares**
```javascript
// Encontrar si existe un par que sume un valor objetivo
function twoSumSorted(arr, target) {
    // Paso 1: Inicializar punteros en extremos opuestos
    let left = 0;                    // Puntero izquierdo al inicio del array
    let right = arr.length - 1;      // Puntero derecho al final del array
    
    // Paso 2: Continuar mientras los punteros no se crucen
    while (left < right) {
        // Paso 3: Calcular la suma de los elementos actuales
        const sum = arr[left] + arr[right];
        
        // Paso 4: Verificar si encontramos el objetivo
        if (sum === target) {
            return [left, right];    // Retornar índices si encontramos el par
        }
        
        // Paso 5: Ajustar punteros según la suma
        if (sum < target) {
            left++;                  // Suma muy pequeña, mover puntero izquierdo hacia la derecha
        } else {
            right--;                 // Suma muy grande, mover puntero derecho hacia la izquierda
        }
    }
    
    // Paso 6: No se encontró solución
    return [-1, -1];
}
```

### 2. **Validación de Palíndromo**
```javascript
function isPalindrome(s) {
    // Paso 1: Inicializar punteros en extremos opuestos
    let left = 0;                    // Puntero izquierdo al inicio del string
    let right = s.length - 1;        // Puntero derecho al final del string
    
    // Paso 2: Continuar mientras los punteros no se crucen
    while (left < right) {
        // Paso 3: Comparar caracteres en posiciones simétricas
        if (s[left] !== s[right]) {
            return false;             // Si no coinciden, no es palíndromo
        }
        
        // Paso 4: Mover ambos punteros hacia el centro
        left++;                      // Avanzar puntero izquierdo
        right--;                     // Retroceder puntero derecho
    }
    
    // Paso 5: Si llegamos aquí, todos los caracteres coincidieron
    return true;                     // Es un palíndromo
}
```

### 3. **Eliminar Duplicados en Array Ordenado**
```javascript
function removeDuplicates(nums) {
    // Paso 1: Manejar caso edge - array vacío
    if (nums.length === 0) return 0;
    
    // Paso 2: Inicializar puntero lento (posición para escribir elementos únicos)
    let slow = 0;                    // Puntero lento marca la posición del último elemento único
    
    // Paso 3: Iterar con puntero rápido a través de todo el array
    for (let fast = 1; fast < nums.length; fast++) {
        // Paso 4: Comparar elemento actual con el último elemento único
        if (nums[fast] !== nums[slow]) {
            // Paso 5: Si son diferentes, es un nuevo elemento único
            slow++;                  // Avanzar puntero lento
            nums[slow] = nums[fast]; // Copiar elemento único a la nueva posición
        }
        // Si son iguales, solo avanzamos el puntero rápido (saltamos duplicado)
    }
    
    // Paso 6: Retornar la cantidad de elementos únicos
    return slow + 1;                 // +1 porque slow es índice, necesitamos cantidad
}
```

### 4. **Detección de Ciclo en Lista Enlazada (Floyd's Algorithm)**
```javascript
function hasCycle(head) {
    // Paso 1: Inicializar ambos punteros en el mismo nodo (tortuga y liebre)
    let slow = head;                 // Puntero lento (tortuga) - avanza 1 paso
    let fast = head;                 // Puntero rápido (liebre) - avanza 2 pasos
    
    // Paso 2: Continuar mientras la liebre pueda avanzar
    while (fast && fast.next) {
        // Paso 3: Mover punteros a diferentes velocidades
        slow = slow.next;            // Tortuga avanza 1 paso
        fast = fast.next.next;       // Liebre avanza 2 pasos
        
        // Paso 4: Verificar si se encontraron (indica ciclo)
        if (slow === fast) {
            return true;             // Si se encuentran, hay un ciclo
        }
    }
    
    // Paso 5: Si la liebre llegó al final, no hay ciclo
    return false;                    // No hay ciclo en la lista
}
```

## Ventajas de Two Pointers

1. **Eficiencia**: Reduce la complejidad temporal de O(n²) a O(n)
2. **Espacio**: Usa espacio constante O(1)
3. **Simplicidad**: Código más limpio y fácil de entender
4. **Versatilidad**: Se aplica a muchos tipos de problemas

## Cuándo Usar Two Pointers

- **Arrays ordenados**: Búsqueda de pares, triples, etc.
- **Palíndromos**: Verificación de simetría
- **Eliminación de duplicados**: En arrays ordenados
- **Detección de ciclos**: En listas enlazadas
- **Problemas de ventana deslizante**: Variación de two pointers
- **Reorganización de arrays**: Mover elementos específicos

## Patrones Comunes

### Patrón 1: Punteros Opuestos
```javascript
// Paso 1: Inicializar punteros en extremos opuestos
let left = 0;                        // Puntero izquierdo al inicio
let right = array.length - 1;        // Puntero derecho al final

// Paso 2: Continuar mientras no se crucen
while (left < right) {
    // Paso 3: Procesar elementos en posiciones left y right
    if (condición) {
        left++;                      // Mover puntero izquierdo hacia la derecha
    } else {
        right--;                     // Mover puntero derecho hacia la izquierda
    }
}
```

### Patrón 2: Punteros Rápidos/Lentos
```javascript
// Paso 1: Inicializar puntero lento (posición de escritura)
let slow = 0;                        // Puntero lento para escribir elementos válidos

// Paso 2: Iterar con puntero rápido a través del array
for (let fast = 0; fast < array.length; fast++) {
    // Paso 3: Verificar condición para el elemento actual
    if (condición) {
        // Paso 4: Si cumple condición, copiar a posición lenta
        array[slow] = array[fast];   // Copiar elemento válido
        slow++;                      // Avanzar puntero lento
    }
    // Si no cumple condición, solo avanzamos el puntero rápido
}
```

## Ejemplo Práctico: Reverse String

En tu proyecto, el problema de "Reverse String" es un ejemplo perfecto:

```javascript
function reverseString(s) {
    // Paso 1: Inicializar punteros en extremos opuestos
    let left = 0;                    // Puntero izquierdo al inicio del array
    let right = s.length - 1;        // Puntero derecho al final del array
    
    // Paso 2: Continuar mientras los punteros no se crucen
    while (left < right) {
        // Paso 3: Intercambiar caracteres en posiciones simétricas
        [s[left], s[right]] = [s[right], s[left]];
        
        // Paso 4: Mover punteros hacia el centro
        left++;                      // Avanzar puntero izquierdo
        right--;                     // Retroceder puntero derecho
    }
    // Al final, el string estará completamente invertido
}
```

## Errores Comunes

1. **No manejar casos edge**: Arrays vacíos, de un elemento
2. **Condiciones de parada incorrectas**: `left <= right` vs `left < right`
3. **Movimiento de punteros**: Mover ambos cuando solo uno debe moverse
4. **Índices fuera de rango**: No validar límites

## Complejidad Típica

- **Tiempo**: O(n) - cada elemento se visita una vez
- **Espacio**: O(1) - solo usa variables auxiliares
- **Comparaciones**: Máximo n comparaciones

Two Pointers es una técnica fundamental que deberías dominar, ya que aparece frecuentemente en entrevistas técnicas y es la base para algoritmos más complejos como sliding window.