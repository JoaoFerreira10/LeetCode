/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    

    let nonNegative = (x > 0)? true: false;
    
    let reverseNum = 0;
    
    while(x != 0) {
        
        let num = x%10;
        
        reverseNum = reverseNum*10 + num;
        
        x = parseInt(x/10);
        
    }
    
    reverseNum = (nonNegative ? reverseNum : (Math.abs(reverseNum)*-1));
    if(reverseNum >= (Math.pow( 2, 31 ) - 1))
        return 0;
    
    return ((reverseNum >= (Math.pow( 2, 31 ) - 1)) || reverseNum <= (Math.pow( 2, 31 ) - 1)*-1)? 0: reverseNum;
};