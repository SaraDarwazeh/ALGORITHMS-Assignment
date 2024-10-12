

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


    contains(value){
        if (!this.head){ console.log ("empty")}
        else{
        let p= this.head; 
        let s= false;
        while(p !== null){
            if (p.value==value){
                s=true;
                break;}

            else{
                p=p.next ;}
            }
            return s;
        } }
}