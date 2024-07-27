function spaceCount(str){
    let count = 0;
    for (let i = 0; i< str.length; i++) {
        if (str[i]===' ') {
           count++; 
        }
        
    }
    return count;
}

const strings = [
    "Revision is the mother of sucess",
    "Javascript is the language of internet"
];

strings.forEach(str => {
    const count = spaceCount(str);
    console.log(`Number of space in string "${str}" is: ${count}`);
})