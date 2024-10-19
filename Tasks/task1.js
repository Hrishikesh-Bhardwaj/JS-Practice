/*
    Find the largest number from 5 numbers

    Example: a = 9,b =10,c = 65,d = 23,e = 45
    Result : c is the largest number

    Complete this using if else condition 
    then tarnary operators

*/


const a = 10;
const b = 20; 
const c = 2;


//use if elseIf condition
if(a>b && a>c){
    console.log("a is greater")
}else if(b>a && b > c){
    console.log("b is greater")
}else{
    console.log("c is greater")
}

//using ternary operator
console.log((a>b && a>c) ? "a is greater": (b>a && b > c ? "b is greater": "c is greater"))
