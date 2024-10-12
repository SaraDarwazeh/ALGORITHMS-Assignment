

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


    length(){
        let num= 0;
        if (!this.head){ return num;}
        else{
        let p= this.head; 
        while(p !== null){
            num ++;
            p=p.next;
        } }
}}