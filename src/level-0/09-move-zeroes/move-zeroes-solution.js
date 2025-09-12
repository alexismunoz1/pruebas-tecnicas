/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let writeIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}

module.exports = moveZeroes;
