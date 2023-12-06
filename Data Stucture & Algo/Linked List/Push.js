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

}


function test() {
    let myLinkedList = new LinkedList(4);
    console.log(myLinkedList.push(17))
}


test();