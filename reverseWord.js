function reverseWord(str){
    const words = str.split(' ');
    const reversedWord = words.map(word=>{

        return word.split('').reverse().join('');
    });
    return reversedWord.join(' ');
}
const strings = [ "Arise! Awake! and stop not until the goal is reached",
    "Learn with us job with us"
];

strings.forEach(str =>{
    const reversedString = reverseWord(str);
    console.log(`Original String: "${str}"`);
    console.log(`Reversed Words:"${reversedString}"`);
    console.log('');
});

