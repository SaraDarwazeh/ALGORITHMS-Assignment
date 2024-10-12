

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

    max(){
        
        if (!this.head){ console.log("empty");return null;}
        else{
        let max = this .head.value;
        let p= this.head; 
        while(p !== null){
            if (p.value > max){max =p.value;}
            
            p=p.next;
        } 
        return max ;}
    }

    min(){
        
        if (!this.head){ console.log("empty");return null;}
        else{
        let min = this .head.value;
        let p= this.head; 
        while(p !== null){
            if (p.value < min){min =p.value;}
            
            p=p.next;
        } 
        return min ;}
    }


    avg(){
        let num= 0 ,sum =0 ;
        if (!this.head){ console.log("empty"); return null;}
        else{
        let p= this.head; 
        while(p !== null){
            sum+=p.value;
            num ++;
            p=p.next;
        } 
    return sum /num ;}
}}