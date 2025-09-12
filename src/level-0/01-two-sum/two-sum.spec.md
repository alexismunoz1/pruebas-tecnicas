# Two Sum

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array de enteros `nums` y un entero `target`, devuelve los índices de los dos números que suman `target`.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explicación: nums[0] + nums[1] = 2 + 7 = 9

// Ejemplo 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Ejemplo 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
```

## Restricciones
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Solo existe una solución válida

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(n) - HashMap para almacenar números vistos

## Pistas
1. Usa un HashMap para almacenar números ya vistos
2. Para cada número, calcula el complemento (target - número actual)
3. Si el complemento existe en el HashMap, devuelve los índices

## Temas Relacionados
- Arrays
- Hash Tables
- Two Pointers (alternativa)
