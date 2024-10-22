/*
Implement to UpperCase using for and if 
Range   a to z = 92 - 122
        A to z = 65 - 90

ex.
let str = hrishikesh
Result = Hrishikesh
*/


let result = '';
function convertToUpperCase(str){
    for(index=0; index<=str.length; index++){
        // console.log(str.charAt(index),' :- ',str.charCodeAt(index))
        const charCodeAt = str.charCodeAt(index);
        if(charCodeAt >= 97 && charCodeAt <= 122){
            result+=String.fromCharCode(charCodeAt - 32);        
        }     
    }
    return result;
}
console.log(convertToUpperCase('hrishikesh'));