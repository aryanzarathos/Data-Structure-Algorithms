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

    push(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        } else{
            this.tail.next=newNode
            newNode.preb=this.tail
            this.tail=newNode
        }
        this.length++
        return this
    }

}


function test() {
    let myDoublyLinkedList = new DoublyLinkedList(1);
    console.log(myDoublyLinkedList,"line 23")
    console.log(myDoublyLinkedList.push(3))
}


test();