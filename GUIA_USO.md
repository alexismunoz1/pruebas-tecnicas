# 📚 Guía de Uso - Ejercicios Algorítmicos

## 🎯 Descripción General

Esta guía contiene **50 ejercicios algorítmicos** organizados en 5 niveles de dificultad, diseñados específicamente para preparar entrevistas técnicas de JavaScript.

## 📊 Estructura de Niveles

### Nivel 0 - Fundamentos (10 ejercicios)
**Tiempo estimado**: 2-3 horas
- Two Sum
- Reverse String  
- Valid Parentheses
- Maximum Subarray
- Climbing Stairs
- Best Time to Buy and Sell Stock
- Single Number
- Missing Number
- Move Zeroes
- Contains Duplicate

**Temas clave**: Arrays básicos, Hash Maps, Two Pointers

### Nivel 1 - Algoritmos Simples (10 ejercicios)
**Tiempo estimado**: 3-4 horas
- Valid Anagram
- Group Anagrams
- Top K Frequent Elements
- Product of Array Except Self
- Longest Common Prefix
- Valid Palindrome
- First Unique Character
- Intersection of Two Arrays
- Happy Number
- Power of Two

**Temas clave**: String manipulation, Sorting, Hash Maps avanzados

### Nivel 2 - Algoritmos Intermedios (10 ejercicios)
**Tiempo estimado**: 4-6 horas
- 3Sum
- Container With Most Water
- Longest Substring Without Repeating Characters
- Longest Palindromic Substring
- ZigZag Conversion
- String to Integer (atoi)
- Roman to Integer
- Integer to Roman
- Longest Common Subsequence
- Edit Distance

**Temas clave**: Dynamic Programming básico, Sliding Window, Greedy

### Nivel 3 - Algoritmos Avanzados (10 ejercicios)
**Tiempo estimado**: 6-8 horas
- Median of Two Sorted Arrays
- Regular Expression Matching
- Wildcard Matching
- Minimum Window Substring
- Sliding Window Maximum
- Longest Increasing Subsequence
- Word Break
- Word Break II
- Decode Ways
- Unique Paths

**Temas clave**: Dynamic Programming avanzado, Backtracking, Graph traversal

### Nivel 4 - Algoritmos Expertos (10 ejercicios)
**Tiempo estimado**: 8-10 horas
- Trapping Rain Water
- Jump Game II
- Merge Intervals
- Insert Interval
- Maximum Product Subarray
- Spiral Matrix
- Rotate Image
- Set Matrix Zeroes
- Game of Life
- Sudoku Solver

**Temas clave**: Advanced DP, Complex data structures, Optimization problems

## 🚀 Cómo Empezar

### 1. Configuración Inicial
```bash
# Instalar dependencias
npm install

# Ejecutar setup completo
npm run setup

# Ver lista de ejercicios
npm run list
```

### 2. Resolver un Ejercicio

1. **Navega al ejercicio**:
   ```bash
   cd src/level-0/01-two-sum
   ```

2. **Lee la especificación**:
   ```bash
   cat two-sum.spec.md
   ```

3. **Implementa tu solución** en `two-sum.js`

4. **Ejecuta los tests**:
   ```bash
   npm test
   ```

5. **Verifica tu solución** comparando con la implementación de referencia

### 3. Comandos Útiles

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con cobertura
npm run test:coverage

# Regenerar estructura de ejercicios
npm run generate

# Ver lista completa de ejercicios
npm run list
```

## 📝 Estructura de Cada Ejercicio

Cada ejercicio contiene:

### Archivo `.spec.md`
- **Descripción** del problema
- **Ejemplos** con input/output
- **Restricciones** del problema
- **Análisis de complejidad** temporal y espacial
- **Pistas** para resolver
- **Temas relacionados**

### Archivo `.js`
- **Implementación** de la solución
- **Comentarios JSDoc** para documentación
- **Código optimizado** y legible

### Archivo `.test.js`
- **Casos de prueba** completos
- **Casos edge** importantes
- **Tests de validación** de la solución

## 🎯 Estrategias de Estudio

### Para Principiantes
1. Comienza con **Nivel 0** y completa todos los ejercicios
2. No te saltes ejercicios - cada uno enseña conceptos importantes
3. Practica explicar tu solución en voz alta
4. Anota los patrones que aprendes

### Para Intermedios
1. Resuelve **Nivel 1** y **Nivel 2** completamente
2. Enfócate en entender la complejidad temporal y espacial
3. Practica diferentes enfoques para el mismo problema
4. Cronometra tu tiempo de resolución

### Para Avanzados
1. Completa **Nivel 3** y **Nivel 4**
2. Optimiza tus soluciones al máximo
3. Practica explicar algoritmos complejos
4. Prepara preguntas de seguimiento

## 🔍 Patrones Importantes

### Arrays y Strings
- **Two Pointers**: Para problemas de búsqueda en arrays ordenados
- **Sliding Window**: Para subarrays/substrings con restricciones
- **Hash Maps**: Para búsquedas rápidas y conteos

### Dynamic Programming
- **Memoización**: Para evitar recálculos
- **Tabulation**: Para construir soluciones bottom-up
- **State Space**: Para problemas de optimización

### Grafos y Árboles
- **DFS/BFS**: Para recorridos
- **Backtracking**: Para problemas de combinaciones
- **Union-Find**: Para problemas de conectividad

## ⏱️ Cronograma Sugerido

### Preparación Intensiva (2 semanas)
- **Semana 1**: Niveles 0-2 (30 ejercicios)
- **Semana 2**: Niveles 3-4 (20 ejercicios)

### Preparación Moderada (1 mes)
- **Semana 1**: Nivel 0 (10 ejercicios)
- **Semana 2**: Nivel 1 (10 ejercicios)
- **Semana 3**: Nivel 2 (10 ejercicios)
- **Semana 4**: Niveles 3-4 (20 ejercicios)

### Preparación Extendida (2 meses)
- **Mes 1**: Niveles 0-2 (30 ejercicios)
- **Mes 2**: Niveles 3-4 (20 ejercicios)

## 🎯 Consejos para Entrevistas

1. **Pregunta clarificaciones** antes de empezar a codificar
2. **Explica tu pensamiento** mientras resuelves
3. **Considera casos edge** desde el principio
4. **Optimiza gradualmente** - primero funciona, luego optimiza
5. **Practica en voz alta** - las entrevistas requieren comunicación

## 📚 Recursos Adicionales

- **LeetCode**: Para más práctica
- **Cracking the Coding Interview**: Libro de referencia
- **Algorithms Visualizer**: Para entender visualmente
- **Big O Cheat Sheet**: Para complejidades comunes

## 🤝 Contribuciones

Si encuentras errores o quieres mejorar ejercicios:
1. Revisa el archivo `spec-driven.md` para el formato
2. Mantén la consistencia con el estilo existente
3. Asegúrate de que los tests pasen
4. Documenta cualquier cambio importante

---

**¡Buena suerte en tus entrevistas técnicas! 🚀**
