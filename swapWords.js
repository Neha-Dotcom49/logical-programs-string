function swapWord(){
    let wordOne = "Angular";
    let wordTwo = "React";

    [wordOne, wordTwo] = [wordTwo, wordOne];

    console.log(`After swapping:`);
    console.log(`wordOne: ${wordOne}`);
    console.log(`wordTwo: ${wordTwo}`);
}
swapWord();