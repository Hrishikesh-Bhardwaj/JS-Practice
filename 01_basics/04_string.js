const gamename = new String("Hrishikesh")
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(5));
console.log(gamename.indexOf('i'));

const newString = gamename.substring(0, 4)
console.log(newString);

const newSliceString = gamename.slice(-10, 2)//
console.log(newSliceString)//

const newStringOne = "          Hrishikesh              "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hrishikesh.com/hrishikesh%20bhardwaj"
console.log(url.replace("%20", "-"))
console.log(url.includes("hrishikesh"))

console.log(url.split())

console.log(` `) // use backticks
