console.log(`1.Reverse string using predefined method`);
function reverseStringUsingMethods(str){
    return str.split('').reverse().join('');
}

const str1 = "Software";
const str2 = "UI Developer";

console.log(`The reverse of the string "${str1}" is:${reverseStringUsingMethods(str1)}`);
console.log(`The reverse of the string "${str2}" is:${reverseStringUsingMethods(str2)}`);

console.log(`2.Reverse string without using predefined method`);
function reverseStringManually(str){
    let reversedStr = '';
    for (let i = str.length-1; i>=0; i--) {
        reversedStr += str[i];
        
    }
    return reversedStr;
}

const str3 = "Web Developer";
const str4 = "Billion Doller";
const str5 = "java";

console.log(`The reverse of the string "${str3}" is:${reverseStringManually(str3)}`);
console.log(`The reverse of the string "${str4}" is:${reverseStringManually(str4)}`);
console.log(`The reverse of the string "${str5}" is:${reverseStringManually(str5)}`);

