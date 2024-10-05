// var, let, const
// recommend not to use var instead of var use let. 

 console.log("Hrishikesh")

 const accountId = 144553
 let accountEmail = "hrishikesh@gmail.com"
 var accountPassword = "12345"
 accountCity = "Jaipur" 

//accountId = 234 // not allowed
accountEmail = "abc@gmail.com"
accountPassword = "1234"
accountCity = "Kota"

console.table([accountEmail, accountPassword, accountCity])
/*
    Note: prefer not to use var because of issue in block scope and functional scope
*/

let accountState;
console.log(accountState)