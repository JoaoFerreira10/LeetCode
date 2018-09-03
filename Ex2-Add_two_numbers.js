/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var sum = new Array();
    
    var has1 = false;
    
    var curry = 0;    

    sum.push((l1.val+l2.val)%10);

    curry = parseInt((l1.val +l2.val)/10);
    
    
    while(l1.next != null || l2.next != null){
        
        var l1V = 0;
        var l2V = 0;
        
        if(l1.next) {
            l1 = l1.next;
            l1V = l1.val;
        }

        if(l2.next) {
            l2 = l2.next;
            l2V = l2.val;
        }     
        
        sum.push((l1V+l2V+curry)%10);

        curry = parseInt((l1V + l2V + curry)/10);
    }
    
    if(curry == 1)
        sum.push(1);
    

    var result, node;
    for(var i = sum.length -1; i >= 0; i--) {
        
        if(i != sum.length -1){
            var x = new ListNode(sum[i]); 
            x.next = node;
            result = x;
            node = x;
        }else{
           node = new ListNode(sum[i]); 
            result = node;
        }
              
    }

    return result;
};