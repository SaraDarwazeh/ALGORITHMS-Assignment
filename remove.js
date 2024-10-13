

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
}

remove(list,value){

    if(!list.head){
        return null ; 
        console.log("empty");
    }
    
    else if (list.head.value == value){
        list.head=list.head.next;
        
    }
    else{
            let p1=list.head;
            let p2= list.head; 
            while(p1.next !== null){
                p1=p1.next;
                if(p1.value == value){
                break; 
                }
                p2=p2.next;
            } 

            if(p1.value==value){
                p2.next =p1.next;}
            
            else (console.log("not found"))
            
    }
    return list;
}
    


