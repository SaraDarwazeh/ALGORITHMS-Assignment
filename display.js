

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

    addFort(value){
        let node = new Node(value) ;
        if (!this.head)
        {
            this.head =node;

        }
        else 
        {let temp = this.head ;
        this.head= node; 
        this.head.next = temp; 
        }
        console.log (this.head);
        return this.head;}


    removeFront(){
        if (!this.head){
            console.log("empty");
                        }
        else{
                his.head =this.head.next ; 
        console.log (this.head);
        return this.head;}}


    display(){
        let s= "";
        if (!this.head){ console.log ("empty")}
        else{
        let p= this.head; 
        while(p !== null){
            s+=p.value+",";
            p=p.next;
        } 
        console.log (s);
    }
}



    }

    

let sll = new LinkedList();
let v = sll.addFort(11);
sll.removeFront();


