let y = prompt("input a sentence");
function sentence(){
    return y;
}
console.log(sentence());
//taking the first and the last letter
function sentence(y){
    let firstcharacter = y.charAt(0).toUpperCase();
    let lastcharacter = y.charAt(y.length -1).toUpperCase();
    let concat1 = firstcharacter.concat(lastcharacter);
    return concat1;
    document.write(sentence());
}
let splitstring = .split("concat1")
