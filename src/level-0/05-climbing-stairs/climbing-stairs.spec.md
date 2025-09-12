# Climbing Stairs

## Dificultad: 0 - Fundamentos

## Descripción
Estás subiendo una escalera. Toma n pasos para llegar arriba. Cada vez puedes subir 1 o 2 pasos. ¿De cuántas maneras distintas puedes subir a la cima?

## Ejemplos
```javascript
// Ejemplo 1:
// Input: n = 2
// Output: 2
// Explicación: Hay dos maneras de subir a la cima
// 1. 1 paso + 1 paso
// 2. 2 pasos

// Ejemplo 2:
// Input: n = 3
// Output: 3
// Explicación: Hay tres maneras de subir a la cima
// 1. 1 paso + 1 paso + 1 paso
// 2. 1 paso + 2 pasos
// 3. 2 pasos + 1 paso
```

## Restricciones
- 1 <= n <= 45

## Complejidad
- **Tiempo**: O(n) - Una pasada por los números
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Es la secuencia de Fibonacci
2. Para llegar al paso n, puedes venir del paso n-1 o n-2
3. Usa programación dinámica con optimización de espacio

## Temas Relacionados
- Dynamic Programming
- Fibonacci
- Math
