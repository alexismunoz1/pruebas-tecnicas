# Valid Anagram

## Dificultad: 1 - Algoritmos Simples

## Descripción
Dado dos strings s y t, devuelve true si t es un anagrama de s, y false en caso contrario.

Un anagrama es una palabra o frase formada reordenando las letras de otra palabra o frase, típicamente usando todas las letras originales exactamente una vez.

## Ejemplos
```javascript
// Ejemplo 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Ejemplo 2:
// Input: s = "rat", t = "car"
// Output: false
```

## Restricciones
- 1 <= s.length, t.length <= 5 * 10^4
- s y t consisten de letras minúsculas del alfabeto inglés

## Complejidad
- **Tiempo**: O(n) - Una pasada por ambos strings
- **Espacio**: O(1) - Array de 26 elementos para contar caracteres

## Pistas
1. Usa un array de 26 elementos para contar caracteres
2. Incrementa el contador para s, decrementa para t
3. Si todos los contadores son 0, es un anagrama

## Temas Relacionados
- Hash Table
- String
- Sorting
