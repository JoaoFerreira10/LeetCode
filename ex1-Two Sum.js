/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var nums2 = new Map();
    
    nums.forEach( (v, i) => nums2[v] = i);
 
    for(let i = 0; i < nums.length ; i++)
        if(nums2[target-nums[i]] != i && nums2[target-nums[i]])
                return [i, nums2[target-nums[i]]];    
};