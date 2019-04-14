public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        
        for(var i = 0; i < nums2.Length; i++)         
            nums1[m + i] = nums2[i];        
        
        Array.Sort(nums1);
    }
}