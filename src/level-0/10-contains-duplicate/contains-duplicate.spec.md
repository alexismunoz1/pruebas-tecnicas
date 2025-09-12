# Contains Duplicate

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array de enteros `nums`, devuelve `true` si algún valor aparece al menos dos veces en el array, y devuelve `false` si cada elemento es distinto.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [1,2,3,1]
// Output: true

// Ejemplo 2:
// Input: nums = [1,2,3,4]
// Output: false

// Ejemplo 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
```

## Restricciones
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(n) - Set para almacenar elementos vistos

## Pistas
1. Usa un Set para rastrear elementos vistos
2. Si encuentras un elemento que ya está en el Set, hay duplicado
3. Alternativamente, ordena el array y compara elementos adyacentes

## Temas Relacionados
- Array
- Hash Table
- Sorting
