const { execSync } = require('child_process');
const path = require('path');

console.log('🧪 Ejecutando tests para todos los ejercicios...\n');

try {
    // Ejecutar todos los tests
    execSync('npm test', { 
        stdio: 'inherit',
        cwd: __dirname 
    });
    
    console.log('\n✅ Todos los tests ejecutados exitosamente');
} catch (error) {
    console.log('\n❌ Algunos tests fallaron');
    console.log('💡 Revisa las implementaciones de los ejercicios');
}
