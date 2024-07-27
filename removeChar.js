function removeChar(str,charToRemove){
    const regex = new RegExp(charToRemove,'g');
    return str.replace(regex,'');
}

const pairs = [
    ["java@Script", '@'],
    ["softyware",'y'],
    ["Code mind", ' ']
];
pairs.forEach(pair=>{
    const str = pair[0];
    const charToRemove = pair[1];
    const result = removeChar(str,charToRemove);
    console.log(`Original String: "${str}", Removed '${charToRemove}':"${result}"`);
});


//The g flag ensures that the @ character is removed wherever it appears in the string.
//No, RegExp is not a method; it is a constructor function in JavaScript used to create regular expression objects

