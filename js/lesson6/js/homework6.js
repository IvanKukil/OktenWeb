const lengthOfString = string => {
    console.log(string.length);
}
lengthOfString('hello world');
lengthOfString('javascript is cool');
lengthOfString('lorem ipsum');

const toUpperCase = string => {
    console.log(string.toUpperCase());
}

toUpperCase('hello world');
toUpperCase('javascript is cool');
toUpperCase('lorem ipsum');

const toLowerCase = string => {
    console.log(string.toLowerCase());
}

toLowerCase('HELLO WORLD');
toLowerCase('LOREM IPSUM');
toLowerCase('JAVASCRIPT IS COOL');

const delSpaces = str => {
    console.log(str.trim(' '));
}

delSpaces(' dirty string   ');

const stringToArray = str => str.split(' ');
const arr = stringToArray('Каждый охотник желает знать');
console.log(arr);
document.writeln(arr);

const insert_dash = str => {
    return str.split(' ').join('-').toUpperCase();
}

document.writeln(insert_dash('HTML JavaScript PHP'));

const delete_characters = (str, length) => {
    return str.substr(0, length);
}

document.writeln(delete_characters('Каждый охотник желает знать', 6));

const firstUp = str => {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(firstUp('hello owu'));

const capitalize = str => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize('i love java script'));