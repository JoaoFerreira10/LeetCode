public class Solution {
    public int SingleNumber(int[] nums) {
        
        //Hashtable numTable = new Hashtable();
        Dictionary<int, int> numTable = new Dictionary<int, int>();
        
        foreach(var num in nums) {
            
            if(!numTable.ContainsKey(num))
                numTable[num] = 0;
            else
                numTable.Remove(num); 
        }
        
        List<int> keyList = new List<int>(numTable.Keys);
        
        return keyList[0];
        
        
    }
}