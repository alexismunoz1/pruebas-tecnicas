# Best Time to Buy and Sell Stock

## Dificultad: 0 - Fundamentos

## Descripción
Dado un array `prices` donde `prices[i]` es el precio de una acción en el día `i`, encuentra el máximo beneficio que puedes obtener comprando en un día y vendiendo en un día posterior.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explicación: Compra en el día 2 (precio = 1) y vende en el día 5 (precio = 6), beneficio = 6-1 = 5

// Ejemplo 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explicación: En este caso, no hay transacciones y el beneficio máximo es 0
```

## Restricciones
- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Mantén el precio mínimo visto hasta ahora
2. Para cada día, calcula el beneficio si vendieras ese día
3. Actualiza el beneficio máximo

## Temas Relacionados
- Array
- Dynamic Programming
- Greedy
