const fs = require('fs');
const path = require('path');

const levels = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4'];
const categories = ['Fundamentos', 'Algoritmos Simples', 'Algoritmos Intermedios', 'Algoritmos Avanzados', 'Algoritmos Expertos'];

function getAllExercises() {
    const exercises = {};
    
    levels.forEach((level, index) => {
        const levelPath = path.join(__dirname, level);
        if (fs.existsSync(levelPath)) {
            const levelExercises = fs.readdirSync(levelPath)
                .filter(dir => fs.statSync(path.join(levelPath, dir)).isDirectory())
                .map(dir => {
                    const specPath = path.join(levelPath, dir, `${dir.split('-').slice(1).join('-')}.spec.md`);
                    if (fs.existsSync(specPath)) {
                        const content = fs.readFileSync(specPath, 'utf8');
                        const title = content.split('\n')[0].replace('# ', '');
                        return {
                            id: dir,
                            title,
                            difficulty: index,
                            category: categories[index],
                            path: `./${level}/${dir}`
                        };
                    }
                    return null;
                })
                .filter(ex => ex !== null);
            
            exercises[level] = levelExercises;
        }
    });
    
    return exercises;
}

function printExerciseList() {
    const exercises = getAllExercises();
    
    console.log('# 🎯 Guía de Ejercicios Algorítmicos para Entrevistas Técnicas\n');
    console.log('## 📊 Resumen por Niveles\n');
    
    Object.keys(exercises).forEach(level => {
        const levelIndex = parseInt(level.split('-')[1]);
        console.log(`### Nivel ${levelIndex} - ${categories[levelIndex]} (${exercises[level].length} ejercicios)\n`);
        
        exercises[level].forEach((exercise, index) => {
            console.log(`${index + 1}. **${exercise.title}**`);
            console.log(`   - Archivo: \`${exercise.path}\``);
            console.log(`   - Dificultad: ${exercise.difficulty}/4\n`);
        });
    });
    
    console.log('## 🚀 Cómo usar\n');
    console.log('1. Navega al directorio del ejercicio que quieras resolver');
    console.log('2. Lee el archivo `.spec.md` para entender el problema');
    console.log('3. Implementa tu solución en el archivo `.js`');
    console.log('4. Ejecuta `npm test` para verificar tu solución');
    console.log('5. Compara tu implementación con la solución de referencia\n');
    
    console.log('## 📈 Progresión Recomendada\n');
    console.log('- **Nivel 0**: Comienza aquí si eres nuevo en algoritmos');
    console.log('- **Nivel 1**: Algoritmos básicos con estructuras de datos');
    console.log('- **Nivel 2**: Programación dinámica y técnicas avanzadas');
    console.log('- **Nivel 3**: Problemas complejos de optimización');
    console.log('- **Nivel 4**: Algoritmos expertos para entrevistas de élite');
}

if (require.main === module) {
    printExerciseList();
}

module.exports = { getAllExercises, printExerciseList };
