/*

1. This in Global Scope
    console.log(this) // output : window

2. This inside function 
    function x(){
        console.log(this) // output :   in strict mode      => undefined
                                        in non-strict mode  => window
    }

3. this inside object method
    const obj = {
        a = 10;
        x: function(){
            console.log(this) // obj.x() output is : object
        }
    }

*/
let userDetail = {
    name: 'hrishikesh',
    age: 29, 
    designation: "salesforce developer",
    printDetail: function(){
        console.log(this.name);
    }
}

// userDetail.printDetail()

let userDetail2 = {
    name: 'bhardwaj',
    age: 29, 
    designation: "salesforce developer"    
}

userDetail.printDetail.call(userDetail2); // this is called function borrowing using call() method.

// if function is global

