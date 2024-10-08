/*
falsy valueS:   false, 0, -0, BigInt 0n, "", null, undefined, NAN
truthy values:  "0", 'false', " ", [], {}, function(){}    
*/

const emptyObject = {}

if(Object.keys(emptyObject).length===0){
    // console.log("empty object");
    
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

