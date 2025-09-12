# Trapping Rain Water

## Dificultad: 4 - Algoritmos Expertos

## Descripción
Dado n barras de altura no negativa que representan un mapa de elevación donde el ancho de cada barra es 1, calcula cuánta agua puede atrapar después de la lluvia.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explicación: El agua atrapada se muestra en azul en el diagrama

// Ejemplo 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9
```

## Restricciones
- n == height.length
- 1 <= n <= 2 * 10^4
- 0 <= height[i] <= 10^5

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa dos punteros desde los extremos
2. Mantén el máximo de cada lado
3. El agua atrapada en cada posición es min(maxLeft, maxRight) - height[i]
4. Mueve el punter del lado con menor altura

## Temas Relacionados
- Array
- Two Pointers
- Dynamic Programming
- Stack
