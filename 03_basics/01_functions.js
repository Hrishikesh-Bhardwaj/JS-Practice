function addTwoNum(num1, num2){
    return num1 + num2;
}

console.log(addTwoNum(2, 5))

function loginUserMessage(userName){
   return `Welcome! ${userName}`
}

console.log(loginUserMessage("Hrishikesh"));

function calculteCartPrice(val1, val2, ...num){ // ...num : rest operator
    return num;
}

console.log(calculteCartPrice(100, 200, 300, 400));

const user = {
    userName: "hrishikesh",
    phone: "123456"
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and phone no. is ${anyObject.phone}`);
}

// handleObject(user)
//direct pass object instead of creating object and then pass it
handleObject({
    userName:"abc",
    phone : "123456789"
})

const myNewArray = [100, 200, 300, 400]

function returnSecondVal(getArray){
    return getArray[1]
}

// console.log(returnSecondVal(myNewArray));
console.log(returnSecondVal([100, 200, 300, 400])); // direct pass

