# Valid Parentheses

## Dificultad: 0 - Fundamentos

## Descripción
Dado un string que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determina si el string es válido.

Un string es válido si:
- Los paréntesis abiertos deben cerrarse en el mismo tipo
- Los paréntesis abiertos deben cerrarse en el orden correcto
- Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo

## Ejemplos
```javascript
// Ejemplo 1:
// Input: s = "()"
// Output: true

// Ejemplo 2:
// Input: s = "()[]{}"
// Output: true

// Ejemplo 3:
// Input: s = "(]"
// Output: false

// Ejemplo 4:
// Input: s = "([)]"
// Output: false
```

## Restricciones
- 1 <= s.length <= 10^4
- s consiste solo de '(', ')', '{', '}', '[' y ']'

## Complejidad
- **Tiempo**: O(n) - Una pasada por el string
- **Espacio**: O(n) - Stack para almacenar paréntesis abiertos

## Pistas
1. Usa un stack para rastrear paréntesis abiertos
2. Para cada paréntesis cerrado, verifica que coincida con el último abierto
3. Al final, el stack debe estar vacío

## Temas Relacionados
- Stack
- String Manipulation
- Matching
