/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
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

module.exports = twoSum;
