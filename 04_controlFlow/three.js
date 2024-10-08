const arr = [1, 2, 3, 4, 5]
// for of loop
for (const num of arr) {
    // console.log(num);    
}

const greeting = "Hello World"
for(const greet of greeting){
    // console.log(`each char at greeting ${greet}`);    
}

//Maps 

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")

// console.log(map);

for(const [key, value] of map){
    // console.log(key, ':-', value);
}

//for of loop on object
const myObject = {
    'game1': 'nfs',
    'game2': 'gta'    
}

for(const [key, value] of myObject){
    // console.log(key, ':-', value); // so here iteration is not done with the help of for of loop. !!!!!!!!!    
}



