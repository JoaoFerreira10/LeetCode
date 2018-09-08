/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    var previousValues = [];
    var previousIndexes = [];
    
    var longestSubstring = 0;
    var uniqueString = true;
    
    for(let i = 0 ; i < s.length ; i++) {
        
        if(previousValues.includes(s.charAt(i))) {
            
            var index = previousValues.indexOf(s.charAt(i)); 
                            
            var subString = previousValues.length; 
            
            if(subString > longestSubstring)
                longestSubstring = subString;

            previousValues = previousValues.slice(index+1);
            previousIndexes = previousIndexes.slice(index+1);
            
            uniqueString = false;
        }
        
        previousValues.push(s.charAt(i));
        previousIndexes.push(i);

    }
    
    if(longestSubstring < previousValues.length) {
        longestSubstring = previousValues.length;
    }        
  
    if(uniqueString)
        return s.length;
    
    return longestSubstring;
};