/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var maxArea = 0;
    
    for(let i = 0; i< height.length-1; i++) {
        for(let j = i+1; j< height.length; j++) {
            
            var area = ((height[i] > height[j]) ? height[j] : height[i])*(j-i);

            maxArea = maxArea < area ? area: maxArea;

        }
    }
    
    return maxArea;
};