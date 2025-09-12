# Missing Number

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array `nums` que contiene n números distintos en el rango [0, n], devuelve el único número en el rango que falta en el array.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [3,0,1]
// Output: 2
// Explicación: n = 3 ya que hay 3 números, entonces todos los números están en el rango [0,3]. 2 es el número que falta

// Ejemplo 2:
// Input: nums = [0,1]
// Output: 2

// Ejemplo 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
```

## Restricciones
- n == nums.length
- 1 <= n <= 10^4
- 0 <= nums[i] <= n
- Todos los números de nums son únicos

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa la fórmula de suma de Gauss: n*(n+1)/2
2. Resta la suma de los elementos del array de la suma esperada
3. Alternativamente, usa XOR con los índices

## Temas Relacionados
- Array
- Math
- Bit Manipulation
