# Ejemplos prácticos de cómo usar HashMap con arrays:

## 1. Contar frecuencia de elementos

```javascript
function contarFrecuencia(arr) {
    const frecuencia = new Map();
    
    for (let elemento of arr) {
        frecuencia.set(elemento, (frecuencia.get(elemento) || 0) + 1);
    }
    
    return frecuencia;
}

const numeros = [1, 2, 2, 3, 3, 3, 4];
console.log(contarFrecuencia(numeros));
// Map { 1 => 1, 2 => 2, 3 => 3, 4 => 1 }
```

## 2. Encontrar duplicados

```javascript
function encontrarDuplicados(arr) {
    const visto = new Map();
    const duplicados = [];
    
    for (let elemento of arr) {
        if (visto.has(elemento)) {
            duplicados.push(elemento);
        } else {
            visto.set(elemento, true);
        }
    }
    
    return duplicados;
}

const datos = [1, 2, 3, 2, 4, 3, 5];
console.log(encontrarDuplicados(datos)); // [2, 3]
```

## 3. Agrupar elementos por categoría

```javascript
function agruparPorEdad(personas) {
    const grupos = new Map();
    
    for (let persona of personas) {
        const edad = persona.edad;
        if (!grupos.has(edad)) {
            grupos.set(edad, []);
        }
        grupos.get(edad).push(persona);
    }
    
    return grupos;
}

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 30 }
];

console.log(agruparPorEdad(personas));
// Map { 25 => [Ana, María], 30 => [Luis, Carlos] }
```

## 4. Encontrar dos números que sumen un target

```javascript
function twoSum(nums, target) {
    const mapa = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];
        
        if (mapa.has(complemento)) {
            return [mapa.get(complemento), i];
        }
        
        mapa.set(nums[i], i);
    }
    
    return [];
}

const numeros = [2, 7, 11, 15];
console.log(twoSum(numeros, 9)); // [0, 1]
```

## 5. Crear índice de búsqueda

```javascript
function crearIndice(productos) {
    const indice = new Map();
    
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        
        // Índice por nombre
        indice.set(producto.nombre.toLowerCase(), i);
        
        // Índice por categoría
        if (!indice.has(`categoria_${producto.categoria}`)) {
            indice.set(`categoria_${producto.categoria}`, []);
        }
        indice.get(`categoria_${producto.categoria}`).push(i);
    }
    
    return indice;
}

const productos = [
    { nombre: "Laptop", categoria: "Electrónicos", precio: 1000 },
    { nombre: "Mouse", categoria: "Electrónicos", precio: 25 },
    { nombre: "Libro", categoria: "Educación", precio: 15 }
];

const indice = crearIndice(productos);
console.log(indice.get("laptop")); // 0
console.log(indice.get("categoria_Electrónicos")); // [0, 1]
```

## 6. Eliminar duplicados manteniendo orden

```javascript
function eliminarDuplicados(arr) {
    const visto = new Set(); // Set es como Map pero solo para claves
    const resultado = [];
    
    for (let elemento of arr) {
        if (!visto.has(elemento)) {
            visto.add(elemento);
            resultado.push(elemento);
        }
    }
    
    return resultado;
}

const conDuplicados = [1, 2, 2, 3, 4, 4, 5];
console.log(eliminarDuplicados(conDuplicados)); // [1, 2, 3, 4, 5]
```

## 7. Encontrar intersección de arrays

```javascript
function interseccion(arr1, arr2) {
    const set1 = new Set(arr1);
    const resultado = [];
    
    for (let elemento of arr2) {
        if (set1.has(elemento)) {
            resultado.push(elemento);
        }
    }
    
    return resultado;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(interseccion(array1, array2)); // [3, 4, 5]
```

### Ventajas de usar HashMap con arrays:

- **O(1)** para búsquedas vs **O(n)** con arrays
- **Eliminación de duplicados** eficiente
- **Agrupación** de elementos por criterios
- **Índices** para búsquedas rápidas
- **Contadores** de frecuencia