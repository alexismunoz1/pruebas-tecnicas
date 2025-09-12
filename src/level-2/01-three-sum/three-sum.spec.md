# 3Sum

## Dificultad: 2 - Algoritmos Intermedios

## Descripción
Dado un array de enteros `nums`, devuelve todos los tripletes `[nums[i], nums[j], nums[k]]` tales que `i != j`, `i != k`, y `j != k`, y `nums[i] + nums[j] + nums[k] == 0`.

La solución no debe contener tripletes duplicados.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Ejemplo 2:
// Input: nums = [0,1,1]
// Output: []

// Ejemplo 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
```

## Restricciones
- 3 <= nums.length <= 3000
- -10^5 <= nums[i] <= 10^5

## Complejidad
- **Tiempo**: O(n^2) - Dos punteros para cada elemento
- **Espacio**: O(1) - Solo variables temporales (sin contar el array de salida)

## Pistas
1. Ordena el array primero
2. Usa un bucle para el primer elemento
3. Usa dos punteros para los otros dos elementos
4. Evita duplicados saltando elementos iguales

## Temas Relacionados
- Array
- Two Pointers
- Sorting
