function charCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase()==='a') {
            count++;
            
        }
        
    }
    return count;
}
const strings = ["javaScript", "Do or Die", "Learn with us, job with us","Anny,My favourite fruits is Apple"];

strings.forEach(str=>{
    console.log(`The number of 'a' char in the string "${str}" is : ${charCount(str)}`);
});


//------------------------method 2---------------------------
console.log(`Count the total number of a character`);
var word = "JavAScript";
var counter = 0;
for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of a is: ${counter}`);


