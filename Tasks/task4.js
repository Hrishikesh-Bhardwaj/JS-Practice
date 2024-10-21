/*
    Implement toLowerCase using for and if 

    Range   a to z = 92 - 122
            A to z = 65 - 90
*/
let result = '';
function convertToLowerCase(str){
    for(index=0; index<=str.length; index++){
        // console.log(str.charAt(index),' :- ',str.charCodeAt(index))
        const charCodeAt = str.charCodeAt(index);
        if(charCodeAt >= 65 && charCodeAt <= 90){
            result+=String.fromCharCode(charCodeAt + 32);        
        }     
    }
    return result;
}
console.log(convertToLowerCase('HRISHIKESH'));