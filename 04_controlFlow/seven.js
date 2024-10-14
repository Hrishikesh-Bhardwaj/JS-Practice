const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = num.map( (item) => {
    return item+10
} )
// console.log(newNums);



// ####### chaining of multiple map and map with filter
const newNums2 = num
                .map(   (item)=> item*10 )
                .map(   (item)=> item+1 )
                .filter((item)=> item>=40 )
console.log(newNums2);