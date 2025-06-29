// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// this under method is very costly, O(n^2) time complexity, which is not efficient for large arrays.
// function twoSum(nums, target) { 
// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// this is a common problem that can be solved using a hash map for efficient lookups.

function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}
console.log(twoSum([3, 2, 4], 6)); // [1, 2]