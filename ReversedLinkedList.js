class Node{
    constructor(newData) {
        this.data = newData;
        this.next = null;
    }
}

function ReversedLinkedList(head){

    let current = head;
    let previous = null;
    let next;

    while (current !== null){
        
        next = current.next;
        current.next = previous;
        previous = current;
        current = next; 
    }
    return previous;
}

function output(node){
    if(node === null){
        return 'null';
    }
    let result = '';
    while(node !== null){
        // console.log(' '+ node.data);
result += node.data + ' -> ';
        node = node.next;
    }
    // console.log(" -> NULL");
    result += ("NULL");
    console.log(result);
}
// let head = null;

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node("NULL");

if (head === null) {
    console.log("Input: Linked List = NULL");
} else {
    console.log("Input: Linked List =");
    output(head); 
}

console.log("Output: Reversed Linked List =");
head = ReversedLinkedList(head);
if(head === null){
    console.log("NULL")
}else{
    output(head);
}
