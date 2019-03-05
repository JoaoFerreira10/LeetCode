public class MinStack {

    List<int> stack;
    List<int> minList;
    int min;
    /** initialize your data structure here. */
    public MinStack() {
        stack = new List<int>();
        minList = new List<int>();
    }
    
    public void Push(int x) {
        if(stack.Count == 0) {
            min = x;
        }
        else {
            min = minList[minList.Count-1] >= x ? x: minList[minList.Count-1];            
        }
     
        stack.Add(x);
        minList.Add(min);
    }
    
    public void Pop() {
        stack.RemoveAt(stack.Count -1);
        minList.RemoveAt(minList.Count -1);
    }
    
    public int Top() {
        return stack[stack.Count -1];
    }
    
    public int GetMin() {
        return minList[minList.Count -1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(x);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */