/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let result = 0;
    let roman = {I: 1, V: 5, X: 10,L: 50, C: 100, D: 500, M: 1000};
    
    for(let i = 0; i< s.length; i++) {
        
        if(roman[s.charAt(i)] < roman[s.charAt(i+1)]) {
            
            result += (roman[s.charAt(i+1)] - roman[s.charAt(i)]);
            i++;
        }
        else {
            result += roman[s.charAt(i)];
        }
    }
    
    return result;
};