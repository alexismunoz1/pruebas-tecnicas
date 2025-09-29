/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumHasMap(nums, target) {
    // creamos el hashmap
    const numMap = new Map();
    
     // creamos el for para iterar por cada número del array
    for (let i = 0; i < nums.length; i++) {

        // calculamos qué número necesitaríamos para completar la suma: target - nums[i]
        const complement = target - nums[i];
        
        // verificamos si ese número ya lo hemos visto antes (está en el HashMap)
        if (numMap.has(complement)) {

            // sí está, retornamos los índices de ambos números
            return [numMap.get(complement), i];
        }
        
        // si no está, guardamos el número actual en el HashMap para futuras comparaciones
        numMap.set(nums[i], i);
    }
    
    // si ninguno de los valores cumple la condicion, retornamos un array vacio
    return [];
}

function twoSumSorted(arr, target) {
    // Paso 1: Inicializar punteros en extremos opuestos
    let left = 0;                    // Puntero izquierdo al inicio del array
    let right = arr.length - 1;      // Puntero derecho al final del array
    
    // Paso 2: Continuar mientras los punteros no se crucen
    while (left < right) {
        // Paso 3: Calcular la suma de los elementos actuales
        const sum = arr[left] + arr[right];
        
        // Paso 4: Verificar si encontramos el objetivo
        if (sum === target) {
            return [left, right];    // Retornar índices si encontramos el par
        }
        
        // Paso 5: Ajustar punteros según la suma
        if (sum < target) {
            left++;                  // Suma muy pequeña, mover puntero izquierdo hacia la derecha
        } else {
            right--;                 // Suma muy grande, mover puntero derecho hacia la izquierda
        }
    }
    
    // Paso 6: No se encontró solución
    return [-1, -1];
}