// reduce method
const myNum = [1, 2, 3]

// const total = myNum.reduce( function(acc, currVal){
//     console.log(`acc val: ${acc}, current value: ${currVal}`);    
//     return acc+currVal
// }, 0 )

const total = myNum.reduce( (acc, curr)=> acc+curr, 0 )

console.log(total);


const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },
    {
        itemName: 'python Course',
        price: 999
    },
    {
        itemName: 'salesforce Course',
        price: 35000
    }
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc + item.price, 0 )
console.log(`Total bill: ${priceToPay}`);


