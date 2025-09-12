const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Configurando guía de ejercicios algorítmicos...\n');

try {
    // 1. Instalar dependencias
    console.log('📦 Instalando dependencias...');
    execSync('pnpm install', { stdio: 'inherit' });
    
    // 2. Generar estructura de ejercicios
    console.log('\n🏗️  Generando estructura de ejercicios...');
    execSync('node generate-exercises.js', { stdio: 'inherit' });
    
    // 3. Mostrar lista de ejercicios
    console.log('\n📋 Lista de ejercicios generados:');
    execSync('node src/index.js', { stdio: 'inherit' });
    
    console.log('\n✅ ¡Configuración completada!');
    console.log('\n🎯 Próximos pasos:');
    console.log('1. Ejecuta: pnpm test');
    console.log('2. Navega a cualquier ejercicio en src/level-X/');
    console.log('3. Lee el archivo .spec.md para entender el problema');
    console.log('4. Implementa tu solución y ejecuta los tests');
    
} catch (error) {
    console.error('❌ Error durante la configuración:', error.message);
    process.exit(1);
}
