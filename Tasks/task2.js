/*
    Implement Example of break that has been explained in the class and share it 1-1
*/

const day = 5;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); 

//continue example

for (let i = 0; i < 10; i++) {
    if (i === 5){ 
        continue;
    }
    console.log(i)
}
console.log("")
//break
for (let i = 0; i < 10; i++) {
    if (i === 5){ 
        break;
    }
    console.log(i)
}