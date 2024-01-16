
// Length method returns number of characters in a string, including spaces and punctuation,
// it will not give us the length of a number. If num = 1001, num.length will return undefined
// rather than 4.

//  PART ONE
const number = 1001;
const decimal = 123.45;


// console.log(number.length); // undefined
// console.log(String(number).length); // 4
// console.log(String(decimal).length); // 6
// console.log(String(decimal).replace(/\./g, '').length); // 5


function numberLength(num) {
    num = String(num);
    if (num.includes('.')) {
        return num.replace(/\./g, '').length;
    } else {
        return num.length;
    }
}

console.log(numberLength(number)); // 4
console.log(numberLength(decimal)); // 5

// strings are immutable, use the trim method to remove whitespace from the beginning and end of a string

// PART TWO
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT "
let noWhiteSpace = dna.trim();
let upperCase = noWhiteSpace.toUpperCase();
dna = dna.trim().toUpperCase();
dna = dna.replace('GCT', 'AGG');

console.log(noWhiteSpace);
console.log(upperCase);
console.log(dna);

if (dna.indexOf('CAT')) {
    console.log('CAT found!');
} else {
    console.log('CAT not found!');
}

console.log(dna.slice(16,19))

console.log(`The DNA strand is ${dna.length} characters long.`);

console.log(dna.slice(4,7).toLowerCase() + 'o ' + dna.slice(dna.indexOf('CAT'), dna.indexOf('CAT') + 3).toLowerCase());

// PART THREE

const language = 'JavaScript';
const initials = 'JS';
const titleCase = 'title case';


console.log(language.slice(0,1) + language.slice(4,5));
console.log(language.replace('ava','').replace('cript',''));
console.log(language[language.indexOf('J')] + language[language.indexOf('S')]);

console.log(`The abbreviation for '${language}' is '${initials}'.`);

console.log(language.slice(1,language.length).replace('a', '@').toUpperCase());

console.log(titleCase.replace('t', 'T').replace('c', 'C'));