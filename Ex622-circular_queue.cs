public class MyCircularQueue {

    private List<int> queue;
    private int head = -1;
    private int rear = -1;
    private int size = 0;
    private bool empty = true;
    private bool full = false;
    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int k) {
        queue = new List<int>();
        size = k;
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public bool EnQueue(int value) {
        
        if(IsFull())
            return false;
                
        if(rear+1 == size && head > 0) {
            rear = 0;  
            queue[rear] = value;
            if(empty)
                head = 0;
        }
        else if(rear+1 < head){
            queue[rear+1] = value;
            rear++;
        }
        else {
            queue.Add(value);
            rear++;
            
            if(empty)
                head++; 
            
            empty = false;
        }
        
        if((head == 0 && rear+1 == size) || (rear+1 == head) )
            full = true;
        
        return true;
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public bool DeQueue() {
        
        if(IsEmpty() == true)
            return false;
        
        if(head == rear){
            empty = true;
        }
        else if((head+1) == size) {
            head = 0;
        }
        else {          
            head++;
            full = false;
        }
          
        return true;       
    }
    
    /** Get the front item from the queue. */
    public int Front() {

        if(IsEmpty())
            return -1;
        return queue[head];
    }
    
    /** Get the last item from the queue. */
    public int Rear() {

        if(IsEmpty())
            return -1;
        return queue[rear];
    }
    
    /** Checks whether the circular queue is empty or not. */
    public bool IsEmpty() {        
        return empty;
    }
    
    /** Checks whether the circular queue is full or not. */
    public bool IsFull() {
        return full;
    }
}