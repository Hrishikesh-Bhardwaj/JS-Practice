const codingLang = ['js', 'python', 'java', 'ruby']

// forEach loop basic function
codingLang.forEach(function (item){
    // console.log(item);
    
})

//forEach loop arrow function
codingLang.forEach( (item) => {
    // console.log(item);    
})


//passing function in forEach loop
function printMe(item){
    // console.log(item);    
}
codingLang.forEach(printMe)

//forEach loop comes with some more parameter including item like index, arrayList
codingLang.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);    
} )

//handling objects in Array
const myCodingLang = [
    {
        language: "javaScript",
        languageFilename: 'js'
    },
    {
        language: "python",
        languageFilename: 'py'
    },
    {
        language: "java",
        languageFilename: 'java'
    }
]

myCodingLang.forEach((item)=>{
    console.log(item.language);    
    console.log(item.languageFilename);    
})