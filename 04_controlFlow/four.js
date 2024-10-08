const myObject = {
    js: 'javaScript',
    cpp: 'c++',
    py: 'python',
    rb: 'ruby'
}

//For In loop

for (const key in myObject) {
    console.log(key, '  :-  ', myObject[key]);    
}

// for in loop for array (only index no (key) printed)

const prog = ['js', 'python', 'java']
for(const keys in prog){
    console.log(prog[keys]);
    
}