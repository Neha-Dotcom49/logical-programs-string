function consonantsCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (consonants.includes(str[i])) {
            count++;
        }
    }
    return count;
}
const strings = ["JavaScript", "HTML and CSS", "Language Of Internet", "I am UI Developer", "Do or Die"];
strings.forEach(str => {
    console.log(`Number of consonants in "${str}": ${consonantsCount(str)}`);
});


// -- -- -- -- -- -- -- -- -- -- -- --print constant-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// function consonantsCount(str) {
//     const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
//     let count = "";
//     for (let i = 0; i < str.length; i++) {
//         if (consonants.includes(str[i])) {
//             count = count + str[i];
//         }
//     }
//     return count;
// }
// const strings2 = ["JavaScript", "HTML and CSS", "Language Of Internet", "I am UI Developer", "Do or Die"];
// strings2.forEach(str => {
//     console.log(`Number of consonants in "${str}": ${consonantsCount(str)}`);
// });