# Maximum Subarray

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array de enteros `nums`, encuentra el subarray contiguo con la suma más grande y devuelve su suma.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explicación: [4,-1,2,1] tiene la suma más grande = 6

// Ejemplo 2:
// Input: nums = [1]
// Output: 1

// Ejemplo 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
```

## Restricciones
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa el algoritmo de Kadane
2. Mantén la suma máxima hasta el momento
3. Si la suma actual se vuelve negativa, reiníciala a 0

## Temas Relacionados
- Dynamic Programming
- Array
- Kadane's Algorithm
