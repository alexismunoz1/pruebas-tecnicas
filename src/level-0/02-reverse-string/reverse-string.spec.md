# Reverse String

## Dificultad: 0 - Fundamentos

## Descripción
Escribe una función que invierta un string. El input es un array de caracteres `s` y debes hacerlo in-place con O(1) de memoria extra.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Ejemplo 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
```

## Restricciones
- 1 <= s.length <= 10^5
- s[i] es un carácter ASCII imprimible

## Complejidad
- **Tiempo**: O(n) - Una pasada por el array
- **Espacio**: O(1) - Solo variables temporales

## Pistas
1. Usa dos punteros (inicio y final)
2. Intercambia caracteres en cada extremo
3. Mueve los punteros hacia el centro

## Temas Relacionados
- Two Pointers
- String Manipulation
