
// Stack class
class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }
    // push function
    push(element) {
        // push element into the items
        this.items.push(element);
    }

    pop() {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
}

