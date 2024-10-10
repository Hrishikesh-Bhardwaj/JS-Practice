const codingLang = ['js', 'python', 'java', 'ruby'] 

const val = codingLang.forEach((item)=>{
    // console.log(item);    
})

// console.log(val); // undefined bcz forEach not return value. Use Filter instead


// ############ filter #############

const num = [1, 2, 3, 4, 5, 6]
const res = num.filter( (num)=>num > 3 ) 
// console.log(res); // [4, 5, 6]

//######################################

const newNums = []
num.forEach( (item)=> {
    if(item > 3){
        newNums.push(item)
    }    
})
// console.log(newNums); [4, 5, 6]

const books = [
    {
        title: 'Book One', 
        genere: 'fiction',
        publish: 1981, 
        edition: 2004
    },
    {
        title: 'Book two', 
        genere: 'non-fiction',
        publish: 1932, 
        edition: 2005
    },
    {
        title: 'Book three', 
        genere: 'non-fiction',
        publish: 2004, 
        edition: 2006
    },
    {
        title: 'Book four', 
        genere: 'fiction',         
        publish: 1981, 
        edition: 2009
    },
    {
        title: 'Book five', 
        genere: 'history',
        publish: 1996, 
        edition: 2002
    },
    {
        title: 'Book six', 
        genere: 'science',
        publish: 1995,              
        edition: 2010
    }
]

const userBooks = books.filter( (bk)=> bk.genere =='history' )
// console.log(userBooks);

const userBooks2 = books.filter( (bk)=>{
    return bk.genere = 'fiction' && bk.publish==1981
})
console.log(userBooks2);
