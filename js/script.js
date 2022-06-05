let sentence = prompt("input a sentence");
console.log();
//taking the first and the last letter
// function character(sentence){
    //to get the first letter.
    let firstcharacter = sentence.charAt(0).toUpperCase();
    //to get the second letter.
    let lastcharacter = sentence.charAt(sentence.length -1).toUpperCase();
    // function to take first letter and last letter and rtn as a str in cap.letter
    let concat = firstcharacter.concat(lastcharacter);
    function firstandlastletter(){
        return concat;
    }
alert(firstandlastletter());

//to reverse my first and last letter
let rev = concat.split("");
function splitFirstAndLast(){
    return rev;
}
alert(splitFirstAndLast());
//reversing split
let splitArray = rev.reverse("");
function reverseSplit(){
    return splitArray;
}
alert(reverseSplit());
//joining reverse
let joinReverse = splitArray.join("");
function joinArray(){
    let joinReverse = splitArray.join("");
    return joinReverse;
}
alert(joinArray());
//function that call my first two functions
function thirdfunction(){
    let firstfunction = concat;
    let secondfunction = joinReverse;
    let thirdfunction = sentence.concat(joinReverse);
    return thirdfunction;
}
alert(thirdfunction());


//function to count numbers of characters in the sentence and divide.
function divideByTwo(){
    let total = sentence.length;
    let answer = total / 2;
    let roundDown = Math.floor("answer");
    return answer;
}
alert(divideByTwo());








