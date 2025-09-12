# Move Zeroes

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array de enteros `nums`, mueve todos los 0's al final del array manteniendo el orden relativo de los elementos no-cero.

Debes hacer esto in-place sin hacer una copia del array.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Ejemplo 2:
// Input: nums = [0]
// Output: [0]
```

## Restricciones
- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa dos punteros: uno para elementos no-cero y otro para la posición actual
2. Intercambia elementos no-cero con la posición actual
3. Al final, llena con ceros si es necesario

## Temas Relacionados
- Array
- Two Pointers
- In-place
