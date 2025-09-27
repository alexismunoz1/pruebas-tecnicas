# ¿Que es HasMap?

Un **HashMap** (también llamado tabla hash o diccionario) es una estructura de datos que almacena pares de clave-valor de forma muy eficiente.

### Características principales:

1. **Acceso rápido**: Puedes encontrar un valor usando su clave en tiempo O(1) promedio
2. **Claves únicas**: Cada clave solo puede aparecer una vez
3. **Flexibilidad**: Las claves y valores pueden ser de cualquier tipo

### Ejemplo práctico:
```javascript
// Crear un HashMap
const mapa = new Map();

// Agregar elementos
mapa.set("nombre", "Juan");
mapa.set("edad", 25);
mapa.set("ciudad", "Madrid");

// Obtener valores
console.log(mapa.get("nombre")); // "Juan"
console.log(mapa.get("edad"));   // 25

// Verificar si existe una clave
console.log(mapa.has("ciudad")); // true

// Eliminar un elemento
mapa.delete("edad");

```

### ¿Cómo funciona internamente?
1. **Función hash**: Convierte la clave en un número (índice)
2. **Array**: Usa ese índice para almacenar el valor
3. **Colisiones**: Si dos claves generan el mismo índice, las maneja con listas enlazadas

### VentajasL
- ✅ Búsqueda muy ráoida
- ✅ Inserción y eliminación eficientes
- ✅ Flexible con tipos de datos

### Desventajas:
- ❌ No mantiene orden de inserción (en versiones antiguas)
- ❌ Puede tener colisiones que ralentizan el acceso
- ❌ Usa más memoria que un array simple

### Casos de uso comunes:
- Contadores de frecuencia
- Caché de datos
- Índices de búsqueda
- Eliminación de duplicados