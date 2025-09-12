const fs = require('fs');
const path = require('path');

const exercises = {
    0: [
        { id: '01', name: 'two-sum', title: 'Two Sum' },
        { id: '02', name: 'reverse-string', title: 'Reverse String' },
        { id: '03', name: 'valid-parentheses', title: 'Valid Parentheses' },
        { id: '04', name: 'maximum-subarray', title: 'Maximum Subarray' },
        { id: '05', name: 'climbing-stairs', title: 'Climbing Stairs' },
        { id: '06', name: 'best-time-to-buy-sell-stock', title: 'Best Time to Buy and Sell Stock' },
        { id: '07', name: 'single-number', title: 'Single Number' },
        { id: '08', name: 'missing-number', title: 'Missing Number' },
        { id: '09', name: 'move-zeroes', title: 'Move Zeroes' },
        { id: '10', name: 'contains-duplicate', title: 'Contains Duplicate' }
    ],
    1: [
        { id: '01', name: 'valid-anagram', title: 'Valid Anagram' },
        { id: '02', name: 'group-anagrams', title: 'Group Anagrams' },
        { id: '03', name: 'top-k-frequent-elements', title: 'Top K Frequent Elements' },
        { id: '04', name: 'product-of-array-except-self', title: 'Product of Array Except Self' },
        { id: '05', name: 'longest-common-prefix', title: 'Longest Common Prefix' },
        { id: '06', name: 'valid-palindrome', title: 'Valid Palindrome' },
        { id: '07', name: 'first-unique-character', title: 'First Unique Character' },
        { id: '08', name: 'intersection-of-two-arrays', title: 'Intersection of Two Arrays' },
        { id: '09', name: 'happy-number', title: 'Happy Number' },
        { id: '10', name: 'power-of-two', title: 'Power of Two' }
    ],
    2: [
        { id: '01', name: 'three-sum', title: '3Sum' },
        { id: '02', name: 'container-with-most-water', title: 'Container With Most Water' },
        { id: '03', name: 'longest-substring-without-repeating', title: 'Longest Substring Without Repeating Characters' },
        { id: '04', name: 'longest-palindromic-substring', title: 'Longest Palindromic Substring' },
        { id: '05', name: 'zigzag-conversion', title: 'ZigZag Conversion' },
        { id: '06', name: 'string-to-integer-atoi', title: 'String to Integer (atoi)' },
        { id: '07', name: 'roman-to-integer', title: 'Roman to Integer' },
        { id: '08', name: 'integer-to-roman', title: 'Integer to Roman' },
        { id: '09', name: 'longest-common-subsequence', title: 'Longest Common Subsequence' },
        { id: '10', name: 'edit-distance', title: 'Edit Distance' }
    ],
    3: [
        { id: '01', name: 'median-of-two-sorted-arrays', title: 'Median of Two Sorted Arrays' },
        { id: '02', name: 'regular-expression-matching', title: 'Regular Expression Matching' },
        { id: '03', name: 'wildcard-matching', title: 'Wildcard Matching' },
        { id: '04', name: 'minimum-window-substring', title: 'Minimum Window Substring' },
        { id: '05', name: 'sliding-window-maximum', title: 'Sliding Window Maximum' },
        { id: '06', name: 'longest-increasing-subsequence', title: 'Longest Increasing Subsequence' },
        { id: '07', name: 'word-break', title: 'Word Break' },
        { id: '08', name: 'word-break-ii', title: 'Word Break II' },
        { id: '09', name: 'decode-ways', title: 'Decode Ways' },
        { id: '10', name: 'unique-paths', title: 'Unique Paths' }
    ],
    4: [
        { id: '01', name: 'trapping-rain-water', title: 'Trapping Rain Water' },
        { id: '02', name: 'jump-game-ii', title: 'Jump Game II' },
        { id: '03', name: 'merge-intervals', title: 'Merge Intervals' },
        { id: '04', name: 'insert-interval', title: 'Insert Interval' },
        { id: '05', name: 'maximum-product-subarray', title: 'Maximum Product Subarray' },
        { id: '06', name: 'spiral-matrix', title: 'Spiral Matrix' },
        { id: '07', name: 'rotate-image', title: 'Rotate Image' },
        { id: '08', name: 'set-matrix-zeroes', title: 'Set Matrix Zeroes' },
        { id: '09', name: 'game-of-life', title: 'Game of Life' },
        { id: '10', name: 'sudoku-solver', title: 'Sudoku Solver' }
    ]
};

const exerciseSpecs = {
    1: {
        'valid-anagram': {
            description: 'Dado dos strings s y t, devuelve true si t es un anagrama de s, y false en caso contrario.',
            examples: [
                { input: 's = "anagram", t = "nagaram"', output: 'true' },
                { input: 's = "rat", t = "car"', output: 'false' }
            ],
            constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's y t consisten de letras minúsculas del alfabeto inglés'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            hints: ['Usa un array de 26 elementos para contar caracteres', 'Compara los conteos de ambos strings'],
            topics: ['Hash Table', 'String', 'Sorting']
        },
        'group-anagrams': {
            description: 'Dado un array de strings strs, agrupa los anagramas juntos.',
            examples: [
                { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' },
                { input: 'strs = [""]', output: '[[""]]' }
            ],
            constraints: ['1 <= strs.length <= 10^4', '0 <= strs[i].length <= 100', 'strs[i] consiste solo de letras minúsculas del alfabeto inglés'],
            timeComplexity: 'O(n * m * log m)',
            spaceComplexity: 'O(n * m)',
            hints: ['Usa el string ordenado como clave', 'Agrupa strings con la misma clave'],
            topics: ['Hash Table', 'String', 'Sorting']
        },
        'top-k-frequent-elements': {
            description: 'Dado un array de enteros nums y un entero k, devuelve los k elementos más frecuentes.',
            examples: [
                { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1,2]' },
                { input: 'nums = [1], k = 1', output: '[1]' }
            ],
            constraints: ['1 <= nums.length <= 10^5', 'k está en el rango [1, número de elementos únicos]', 'Se garantiza que la respuesta es única'],
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(n)',
            hints: ['Cuenta la frecuencia de cada elemento', 'Ordena por frecuencia y toma los k primeros'],
            topics: ['Array', 'Hash Table', 'Sorting', 'Heap']
        },
        'product-of-array-except-self': {
            description: 'Dado un array de enteros nums, devuelve un array answer tal que answer[i] es igual al producto de todos los elementos de nums excepto nums[i].',
            examples: [
                { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
                { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' }
            ],
            constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30', 'Se garantiza que el producto de cualquier prefijo o sufijo de nums cabe en un entero de 32 bits'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            hints: ['Calcula productos de izquierda a derecha', 'Calcula productos de derecha a izquierda', 'Multiplica ambos resultados'],
            topics: ['Array', 'Prefix Sum']
        },
        'longest-common-prefix': {
            description: 'Escribe una función para encontrar el prefijo común más largo entre un array de strings.',
            examples: [
                { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
                { input: 'strs = ["dog","racecar","car"]', output: '""' }
            ],
            constraints: ['1 <= strs.length <= 200', '0 <= strs[i].length <= 200', 'strs[i] consiste solo de letras minúsculas del alfabeto inglés'],
            timeComplexity: 'O(S)',
            spaceComplexity: 'O(1)',
            hints: ['Compara caracteres posición por posición', 'Usa el primer string como referencia'],
            topics: ['String', 'Trie']
        },
        'valid-palindrome': {
            description: 'Dado un string s, devuelve true si es un palíndromo, o false en caso contrario.',
            examples: [
                { input: 's = "A man, a plan, a canal: Panama"', output: 'true' },
                { input: 's = "race a car"', output: 'false' }
            ],
            constraints: ['1 <= s.length <= 2 * 10^5', 's consiste solo de caracteres ASCII imprimibles'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            hints: ['Usa dos punteros desde los extremos', 'Ignora caracteres no alfanuméricos'],
            topics: ['Two Pointers', 'String']
        },
        'first-unique-character': {
            description: 'Dado un string s, encuentra el primer carácter no repetido y devuelve su índice. Si no existe, devuelve -1.',
            examples: [
                { input: 's = "leetcode"', output: '0' },
                { input: 's = "loveleetcode"', output: '2' }
            ],
            constraints: ['1 <= s.length <= 10^5', 's consiste solo de letras minúsculas del alfabeto inglés'],
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            hints: ['Cuenta la frecuencia de cada carácter', 'Encuentra el primer carácter con frecuencia 1'],
            topics: ['Hash Table', 'String', 'Queue']
        },
        'intersection-of-two-arrays': {
            description: 'Dado dos arrays nums1 y nums2, devuelve un array de su intersección.',
            examples: [
                { input: 'nums1 = [1,2,2,1], nums2 = [2,2]', output: '[2]' },
                { input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', output: '[9,4]' }
            ],
            constraints: ['1 <= nums1.length, nums2.length <= 1000', '0 <= nums1[i], nums2[i] <= 1000'],
            timeComplexity: 'O(n + m)',
            spaceComplexity: 'O(min(n, m))',
            hints: ['Usa un Set para uno de los arrays', 'Verifica si elementos del otro array están en el Set'],
            topics: ['Array', 'Hash Table', 'Two Pointers', 'Sorting']
        },
        'happy-number': {
            description: 'Escribe un algoritmo para determinar si un número n es feliz.',
            examples: [
                { input: 'n = 19', output: 'true' },
                { input: 'n = 2', output: 'false' }
            ],
            constraints: ['1 <= n <= 2^31 - 1'],
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(log n)',
            hints: ['Usa un Set para detectar ciclos', 'Calcula la suma de cuadrados de dígitos'],
            topics: ['Hash Table', 'Math', 'Two Pointers']
        },
        'power-of-two': {
            description: 'Dado un entero n, devuelve true si es una potencia de dos. En caso contrario, devuelve false.',
            examples: [
                { input: 'n = 1', output: 'true' },
                { input: 'n = 16', output: 'true' },
                { input: 'n = 3', output: 'false' }
            ],
            constraints: ['-2^31 <= n <= 2^31 - 1'],
            timeComplexity: 'O(1)',
            spaceComplexity: 'O(1)',
            hints: ['Usa operaciones bit a bit', 'n & (n-1) == 0 para potencias de 2'],
            topics: ['Math', 'Bit Manipulation', 'Recursion']
        }
    }
};

function createDirectoryStructure() {
    for (let level = 0; level <= 4; level++) {
        const levelDir = path.join(__dirname, 'src', `level-${level}`);
        if (!fs.existsSync(levelDir)) {
            fs.mkdirSync(levelDir, { recursive: true });
        }
    }
}

function generateExerciseFiles(level, exercise) {
    const levelDir = path.join(__dirname, 'src', `level-${level}`);
    const exerciseDir = path.join(levelDir, `${exercise.id}-${exercise.name}`);
    
    if (!fs.existsSync(exerciseDir)) {
        fs.mkdirSync(exerciseDir, { recursive: true });
    }

    // Crear archivo .spec.md
    const specContent = generateSpecContent(level, exercise);
    fs.writeFileSync(path.join(exerciseDir, `${exercise.name}.spec.md`), specContent);

    // Crear archivo .js
    const jsContent = generateJsContent(exercise);
    fs.writeFileSync(path.join(exerciseDir, `${exercise.name}.js`), jsContent);

    // Crear archivo .test.js
    const testContent = generateTestContent(exercise);
    fs.writeFileSync(path.join(exerciseDir, `${exercise.name}.test.js`), testContent);
}

function generateSpecContent(level, exercise) {
    const categories = ['Fundamentos', 'Algoritmos Simples', 'Algoritmos Intermedios', 'Algoritmos Avanzados', 'Algoritmos Expertos'];
    
    // Si tenemos especificaciones detalladas, usarlas
    if (exerciseSpecs[level] && exerciseSpecs[level][exercise.name]) {
        const spec = exerciseSpecs[level][exercise.name];
        return `# ${exercise.title}

## Dificultad: ${level} - ${categories[level]}

## Descripción
${spec.description}

## Ejemplos
\`\`\`javascript
${spec.examples.map((ex, i) => `// Ejemplo ${i + 1}:\n// Input: ${ex.input}\n// Output: ${ex.output}`).join('\n\n')}
\`\`\`

## Restricciones
${spec.constraints.map(c => `- ${c}`).join('\n')}

## Complejidad
- **Tiempo**: ${spec.timeComplexity} - [explicación]
- **Espacio**: ${spec.spaceComplexity} - [explicación]

## Pistas
${spec.hints.map((hint, i) => `${i + 1}. ${hint}`).join('\n')}

## Temas Relacionados
${spec.topics.map(topic => `- ${topic}`).join('\n')}
`;
    }
    
    // Especificación genérica
    return `# ${exercise.title}

## Dificultad: ${level} - ${categories[level]}

## Descripción
[Descripción del problema - por implementar]

## Ejemplos
\`\`\`javascript
// Ejemplo 1:
// Input: [entrada]
// Output: [salida]
// Explicación: [explicación]
\`\`\`

## Restricciones
- [restricción 1]
- [restricción 2]

## Complejidad
- **Tiempo**: O([complejidad]) - [explicación]
- **Espacio**: O([complejidad]) - [explicación]

## Pistas
1. [pista 1]
2. [pista 2]

## Temas Relacionados
- [tema 1]
- [tema 2]
`;
}

function generateJsContent(exercise) {
    return `/**
 * @param {[tipo]} [parámetro]
 * @return {[tipo]}
 */
function ${exercise.name.replace(/-/g, '')}([parámetros]) {
    // Implementación pendiente
}

module.exports = ${exercise.name.replace(/-/g, '')};
`;
}

function generateTestContent(exercise) {
    const functionName = exercise.name.replace(/-/g, '');
    return `const ${functionName} = require('./${exercise.name}');

describe('${exercise.title}', () => {
    test('caso básico', () => {
        expect(${functionName}([input])).toEqual([output]);
    });

    test('caso adicional', () => {
        expect(${functionName}([input])).toEqual([output]);
    });
});
`;
}

// Ejecutar generación
createDirectoryStructure();

for (let level = 0; level <= 4; level++) {
    exercises[level].forEach(exercise => {
        generateExerciseFiles(level, exercise);
    });
}

console.log('✅ Estructura de ejercicios generada exitosamente');
console.log('📁 Directorios creados: src/level-0 a src/level-4');
console.log('📄 Archivos generados: .spec.md, .js, .test.js para cada ejercicio');
console.log('🎯 Total: 50 ejercicios (10 por nivel)');
