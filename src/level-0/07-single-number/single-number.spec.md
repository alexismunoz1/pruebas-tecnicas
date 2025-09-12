# Single Number

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array de enteros `nums` donde cada elemento aparece dos veces excepto uno que aparece una sola vez, encuentra el elemento único.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [2,2,1]
// Output: 1

// Ejemplo 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Ejemplo 3:
// Input: nums = [1]
// Output: 1
```

## Restricciones
- 1 <= nums.length <= 3 * 10^4
- -3 * 10^4 <= nums[i] <= 3 * 10^4
- Cada elemento en el array aparece dos veces excepto uno

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa la operación XOR
2. XOR de un número consigo mismo es 0
3. XOR de 0 con cualquier número es el número mismo

## Temas Relacionados
- Bit Manipulation
- Array
- Math
