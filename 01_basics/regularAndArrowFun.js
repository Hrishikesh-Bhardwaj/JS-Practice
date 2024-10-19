    /* 
    ## Difference between regular and arrow function:

    1. argument object are not available in arrow functions,
    2. regular functions created using function declaration and function expression are constructable and callable 
    3. arrow functions do not have their own this. 
    4. implicitly returned by the arrow function 
*/

//### argument object are not available in arrow functions,#####

/*
function add(x, y){
    console.log(arguments)
    return x+y; 
}
add(10, 15)

*/

const add = (x, y)=>{
    // console.log(arguments);
    return x+y;
}

add(10, 15)

// arrow functions do not have their own this.

// function car(name){
//     this.brand = name
// }

// let carData = new car('maruti')
// console.log(carData)

// const car = (name)=>{
//     this.brand = name;
// }
// let carData2 = new car('maruti');

const obj1 ={
    name: 'hrishikesh',
    printName(){
        const test = ()=>{
            // console.log(this.name+ ' arrow inside normal function')
        }
        test();
        // console.log(this.name+ ' normal function')
    },
    printName2 : ()=>{
        // console.log(this.name+ ' arrow function')
    }
    
}

obj1.printName()
obj1.printName2()

// implicitly returned by the arrow function 

function marks(){
    100;
}
console.log(marks()) // undefined

const marks2 = ()=>100;
console.log(marks2()) // 100






















