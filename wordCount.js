function wordCount(str) {
    const words = str.split(' ').filter(word => word.length > 0);
    return words.length;
}
const strings = [

    "JavaScript The language of Internet",
    "Enhance Your Learning Journey with Exclusive Add-ons",
    "Beyond frameworks, Beyond Imagination",
    "I am passionate software developer"

];

strings.forEach(str => {
    console.log(`The number of words in the string "${str}" is: ${wordCount(str)}`);

});

//--------------------------------------------------
var myName = "Gajanan Kharat";
var result = myName.split(" ");
console.log(` Total number of words: ${result.length}`);