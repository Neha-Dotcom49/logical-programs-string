// let str9 = "React-UI Developer";
// console.log(`${str9} contain UI-->`,str9.includes('UI')); 

function containsUI(str){
    return str.includes('UI');
}
const str1 = "React - UI Developer";
const str2 = "UI-developer";
const str3 = "Front end and backend technology";

console.log(`Does the string "${str1}" contain 'UI'? ${containsUI(str1)}`);
console.log(`Does the string "${str2}" contain 'UI'? ${containsUI(str2)}`);
console.log(`Does the string "${str3}" contain 'UI'? ${containsUI(str3)}`);