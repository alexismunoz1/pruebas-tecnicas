# Median of Two Sorted Arrays

## Dificultad: 3 - Algoritmos Avanzados

## Descripción
Dado dos arrays ordenados `nums1` y `nums2` de tamaño `m` y `n` respectivamente, devuelve la mediana de los dos arrays ordenados.

La complejidad temporal general debe ser O(log (m+n)).

## Ejemplos
```javascript
// Ejemplo 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explicación: arrays combinados = [1,2,3] y la mediana es 2

// Ejemplo 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explicación: arrays combinados = [1,2,3,4] y la mediana es (2 + 3) / 2 = 2.5
```

## Restricciones
- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -10^6 <= nums1[i], nums2[i] <= 10^6

## Complejidad
- **Tiempo**: O(log(min(m, n))) - Búsqueda binaria en el array más pequeño
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa búsqueda binaria en el array más pequeño
2. Calcula la partición correcta para ambos arrays
3. Verifica que los elementos de la izquierda sean menores que los de la derecha
4. La mediana depende de si la longitud total es par o impar

## Temas Relacionados
- Array
- Binary Search
- Divide and Conquer
