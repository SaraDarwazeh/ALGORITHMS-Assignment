

class Node{

    constructor(value) {
        this.value = value;
        this.next=null ;
    }
    

}
class LinkedList {
    constructor() {
        this.head = null;
    }


    back (){
        
        if (!this.head){ return null;}
        else{
        let p= this.head; 
        while(p.next !== null){
            
            p=p.next;
        } 
        return p.value;}
}

    removeBack (){
        
    if (!this.head){ return null;}
    else if(!this.head.next){
    this.head=null;
    }
    else{
    let p= this.head; 
    while(p.next.next !== null){
        
        p=p.next;
    } 
    p.next=null; 
}}

addBack(value){
    let node =new Node (value);
    if (!this.head){ this.head=node;}
    else if(!this.head.next){
    this.head.next =node;
    }
    else{
    let p= this.head; 
    while(p.next !== null){
        
        p=p.next;
    } 
    p.next=node; 
}

}



}


let list = new LinkedList();
list.head = new Node(10);
list.head.next = new Node(20);
list.head.next.next = new Node(30);

console.log(list.back()); 
list.removeBack();  
console.log(list.back()); 