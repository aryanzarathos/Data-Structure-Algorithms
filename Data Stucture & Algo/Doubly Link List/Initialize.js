class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev=null
    }
}

class DoublyLinkedList {

    constructor(value) {
        this.value = value;
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1
    }

}


function test() {
    let myDoublyLinkedList = new DoublyLinkedList(1);
    console.log(myDoublyLinkedList,"line 23")
}


test();