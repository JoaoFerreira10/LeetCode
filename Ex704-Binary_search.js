/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    let bottom = 0, top = nums.length;

    while((bottom +1) != top) {
        
        let middle = parseInt((top + bottom)/2);
        
        if(nums[middle] <= target)
            bottom = middle;
        else
            top = middle;
        
    }

    if(nums[bottom] == target)
        return bottom;
    else if(nums[top] == target)
        return top;
    else 
        return -1;
    
};