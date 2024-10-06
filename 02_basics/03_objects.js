// objects:    ways to create objects
            // 1. object literals
            // 2. by using constructor -- Singleton (object.create)

const mySym = Symbol("key1") // add symbol as a key in object ?
 
const jUser = {
    name: "Hrishikesh", // by default name(key) is string here
    age: 28, 
    location: "jaipur", 
    [mySym]: "mykey1",
    email: "hrishikesh@gmail.com", 
    isLoggedIn: false,  
    lastLoginDays: ["Monday", "Saturday"]
   
}

// console.log(jUser.email);
// console.log(jUser["email"]);
// console.log(jUser[mySym])

//jUser.email = "abc@gmail.com"
//Object.freeze(jUser) // after freezing object further changes will not propogate.

// console.log(jUser.email)
// console.log(jUser)

// jUser.greeting = function(){
//     console.log(`hello js user, ${this.name}`);    // string interpolation (backticks) // using this for using same object
// }

//console.log(jUser.greeting)


//#####################################################################################

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Hrishikesh"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "sum@gmail.com",
    fullName: {
        userFullName: {
            firstName: "hrishikesh",
            lastName: "bhardwaj"
        }

    }
}

//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}
//############## method to combined object 1. using assign method, 2. using spread operator (recommended)
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // merged obj1 and obj2 into obj3

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const user = [
    {
        id: "1",
        email: "h@gmail.com"
    }, 
    {
        
    }
]

console.log(Object.keys(tinderUser)) // return type array 
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))