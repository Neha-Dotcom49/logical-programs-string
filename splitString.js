function splitString(str,delimiter){
    return str.split(delimiter);
}

const str1 = "apple,orange,banana";
const str2 = "stew , bill,jenny,Elon";

const result1 = splitString(str1,',');
console.log(`The array of substring from "${str1}" is:`, result1);

const result2 = splitString(str2,',');
console.log(`The array of substring from "${str2}" is:`, result2);