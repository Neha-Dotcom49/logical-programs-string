function isPalindrome(str){
    const cleanStr =  str.toLowerCase().replace(/\s/g,'');
    const len = cleanStr.length;


for (let i = 0; i <len / 2; i++) {
    if (cleanStr[i]!== cleanStr[len-1-i]) {
        return false;
    }
    
}
return true;
}
const strings = ["madam", "banana","radar","civil","noon"];

strings.forEach(str=>{
    if (isPalindrome(str)) {
        console.log(`"${str}" is a palindrome.`);
        
    }else{
        console.log(`"${str}" is not a palindrome.`); 
    }

});


//-----------------------------------------------------------------------------
function isPalindrome(str){
    let reverseStr = str.split("").reverse().join("");
     if (str==reverseStr) {
        console.log(`Given string ${str} : is palindrome`);
        
     }else{
        console.log(`Given string ${str} : is not a palindrome`);
     }
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
