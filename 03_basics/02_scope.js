//################# Global Scope ##################
let a = 100;
if(true){
    //##### Block scope #####
    let     a   = 10;
    const   b   = 20;
    var     c   = 30;
    console.log("inside block scope", a);
    
      
}    


console.log(a);
// console.log(b);
console.log(c);   

function one(){
    const userName = "Hrishikesh"

    function two(){
        const website ="Google"
        console.log(userName);        
    }
    // console.log(website);

    two();
}

one();