// class Node{
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function Main(){
//     let head = null;

//     for(let i=1; i<=10; i++){
//         let newNode = new Node(i);

//         if(head === null){
//             head = newNode;
//         }else{
//             let current = head;
//             while (current.next !== null){
//                 current=current.next;
//             }
//             current.next=newNode;
//         }
//     }

//     let current = head;
//     let list = '';
//     while (current !== null){
//         list += current.data + ' ';
//         current = current.next;
//     }

//     console.log(list);

//     while (head !== null){
//         let current = head;
//         head = head.next;
//         current = null;
//     }
// }
// Main();
