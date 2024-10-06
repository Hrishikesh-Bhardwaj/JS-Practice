//array : resizable, mixed, array inside array, indexing start from 0
//      : same referece copy(shallow copy)
//      : 

const supereHeros = ["shaktiman", "superman", "spiderman"];
//const myArr2 = new Array(1, 2, 5, 6);

//console.log(myArr[3]);

// array methods
// myArr.push(5);
// myArr.push(6);
// myArr.pop();

const myArr = [0,1,2,3,4];
//myArr.unshift(-1);
//myArr.shift();
//myArr.shift();

console.log(myArr);
console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(newArr);

//slice and splice

console.log("A", myArr);

const slicedArr = myArr.slice(1, 3) 
console.log(slicedArr); // [1, 2]

const splicedArr = myArr.splice(1, 3)
console.log(splicedArr); // [1, 2, 3]






