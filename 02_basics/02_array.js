// concat: combines two or more arrays and it will return new array 
//  spread operator :  ...

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity);  // here infity automatically find depth of an array 
console.log(real_another_array);

console.log(Array.isArray("Hrishikesh"));
console.log(Array.from("Hrishikesh")); // string convert into array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));


