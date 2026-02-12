// #Problem Statement: (225)
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:
// void push(int x)Pushes element x to the top of the stack.
// int pop()Removes the element on the top of the stack and returns it..
// int top()Returns the element on the top of the stack.
// boolean empty()Returns true if the stack is empty, false otherwise.

// #Notes
// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue’s standard operations.
// Examples
// Example 1:

// Input:[“MyStack”, “push”, “push”, “top”, “pop”, “empty”] [[], [1], [2], [], [], []]

// Output:[null, null, null, 2, 2, false]

// Explanation MyStack myStack = new MyStack(); myStack.push(1); myStack.push(2); myStack.top(); // return 2 myStack.pop(); // return 2 myStack.empty(); // return False

// #Constraints:
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and topare valid.
// Follow-up: Can you implement the stack using only one queue?

// #Approach
// Initialize Two Queues.
// Just add the element to q1. (q1.push(x))
// Remove the last pushed element (i.e., rear of q1).
// Similar to pop(), but instead of removing the last element.
// Check if q1 is empty.

// #Time Complexity:
// push → O(1)
// pop/top → O(n)
// empty → O(1)

// #Space Complexity:
// Space Complexity = O(1)
// In-place modifications with constant extra space.

// Dry Run
// Input: Operations: push(1) push(2) push(3) top() pop() top() empty() 

// State Transitions:
// After push(1): q1 = [1] q2 = []
// After push(2):
// q1 = [1, 2]
// q2 = []
// After push(3):
// q1 = [1, 2, 3]
// q2 = []
// top():
// Move q1 → q2 (except last):
// q2 = [1, 2]
// q1 = [3]
// Peek front = 3, push it to q2
// q2 = [1, 2, 3]
// Swap q1 and q2
// q1 = [1, 2, 3]
// q2 = []
// → Returns: 3
// pop():
// Move q1 → q2 (except last):
// q2 = [1, 2]
// q1 = [3]
// Remove last from q1: 3
// Swap q1 and q2
// q1 = [1, 2]
// q2 = []
// → Returns: 3
// top():
// Move q1 → q2 (except last):
// q2 = [1]
// q1 = [2]
// Peek front = 2, push it to q2
// q2 = [1, 2]
// Swap q1 and q2
// q1 = [1, 2]
// q2 = []
// → Returns: 2
// empty():
// q1 = [1, 2] → Not empty
// → Returns: false
// Final State: q1 = [1, 2], Stack (top to bottom): [2, 1]


var MyStack = function () {
    this.q1 = []
    this.q2 = []
};

MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

MyStack.prototype.pop = function () {
    let n = this.q1.length
    for (let i = 0; i < n - 1; i++) {
        const ele = this.q1.shift()
        this.q2.push(ele)
    }
    const lastEle = this.q1.shift()

    //Exchange
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return lastEle

};
MyStack.prototype.top = function () {
    let n = this.q1.length
    for (let i = 0; i < n - 1; i++) {
        const ele = this.q1.shift()
        this.q2.push(ele)
    }
    const lastEle = this.q1.shift()
    this.q2.push(lastEle)
    //Exchange
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return lastEle
};
MyStack.prototype.empty = function () {
    return this.q1.length === 0
}