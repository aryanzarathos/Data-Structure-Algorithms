class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {

    constructor(value) {
        this.value = value;
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }


    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        // const newNode=new Node(value);
        if (!this.head) {
            return undefined
        } else {
            let temp = this.head
            let pre = this.head
            while (temp.next) {
                console.log(temp)
                pre = temp;
                temp = pre.next
            }
            this.tail = pre
            this.tail.next = null
            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
        }
        return this
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) {
            return undefined
        } else {

            let pre = this.head
            this.head = pre.next

            this.length--
            if (this.length === 0) {
                this.head = null
                this.tail = null
            }
        }
        return this
    }

    get(index) {
        if (!this.head || index > this.length || index < 0) {
            return undefined
        } else {
            let temp = this.head
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
            return temp
        }
    }
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

}


function test() {
    let myLinkedList = new LinkedList(1);
    console.log(myLinkedList.push(2))
    console.log(myLinkedList.push(3))
    console.log(myLinkedList.push(4))
    console.log(myLinkedList.pop())
    console.log(myLinkedList.unshift(4))
    console.log(myLinkedList.shift(4), "shift")
    console.log(myLinkedList.get(1), "get")
    console.log(myLinkedList.set(1, 3), "get")

}


test();