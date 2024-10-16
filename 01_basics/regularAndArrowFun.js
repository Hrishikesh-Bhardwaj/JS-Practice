/* 
    ## Difference between regular and arrow function:

    1. argument object are not available in arrow functions,
    2. regular functions created using function declaration and function expression are constructable and callable 
    3. arrow functions do not have their own this. 
    4. implicitly returned by the arrow function 
*/

/*
function add(x, y){
    console.log(arguments)
    return x+y; 
}
add(10, 15)

*/

const add = (x, y)=>{
    console.log(arguments);
    return x+y;
}

add(10, 15)