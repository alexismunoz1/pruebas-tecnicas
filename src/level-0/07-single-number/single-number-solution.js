/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    
    return result;
}

module.exports = singleNumber;
