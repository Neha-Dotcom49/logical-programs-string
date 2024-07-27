function vowelsCount(str) {
    let count = 0;
    const vowels ='aeiouAEIOU';
    for(let i=0; i< str.length; i++) {
    if (vowels.includes (str[i])) {
    count++;
    }
}
    return count;
    
    }
    const strings = [ "JavaScript", "HTML and CSS", "Language Of Internet", "I am UI Developer", "Do or Die"];
    strings.forEach(str =>{
    console.log(`The number of vowels in the string "${str}" is: ${vowelsCount(str)}`);
    });