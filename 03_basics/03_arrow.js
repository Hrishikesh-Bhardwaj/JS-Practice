// function chai(){
//     let username = "hrishikesh"
//     console.log(this.username);    
// }

// const chai = ()=>{
//     let username = "hrishikesh"
//     console.log(this);    
// }

// chai()

const add = (num1, num2)=>{
    return num1+num2
}

console.log(add(3, 8));

const addNum = (num1, num2)=> num1+num2; // implicit return. to return object wrap it into prethesis().

console.log(addNum(2, 3))