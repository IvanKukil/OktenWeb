const numbers = [1, 10, 20, 30, 40];
console.log(numbers);
const strings = ['one', 'two', 'xiaomi', 'apple', 'asus'];
console.log(strings);
const all = [21, 2000, 'Ivan', true, 'programmer'];
console.log(all);

let arr = [];
arr[0] = 'Joe';
arr[1] = 'West';
arr[2] = 45;
arr[3] = 'The Flash';
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    document.write(`<div>
        ${arr[i]}
    </div>`);
}

document.write('<br>');

for (let i = 0; i < arr.length; i++) {
    document.write(`<div>
       Index ${i} ${arr[i]}
    </div>`);
}

let i = 0;
while (i < 20) {
    document.write(`<h1>
        This is text of loop while
    </h1>`);
    i++;
}

let j = 0;
while (j < 20) {
    document.write(`<h1>
        Index ${j} of text while
    </h1>`)
    j++;
}

const numbersArray = [1, 8, 7, 3, 2, 5, 10, 12, 54, 23];
for (const number of numbersArray) {
    console.log(number);
}
console.log('===========================================================');
const stringArray = ['This', 'is', 'array', 'of', 'strings', 'and', 'he', 'has', 'ten', 'values'];
for (const string of stringArray) {
    console.log(string);
}
console.log('===========================================================');
const allArray = ['This', 'is', 'something', 10, 34, false, 'new', 22, 876, 'yes'];
for (const allArrayElement of allArray) {
    console.log(allArrayElement);
}
console.log('===========================================================');
for (const allArrayElement of allArray) {
    if (typeof allArrayElement === 'boolean') {
        console.log(allArrayElement);
    }
}
console.log('===========================================================');
for (const allArrayElement of allArray) {
    if (typeof allArrayElement === 'number') {
        console.log(allArrayElement);
    }
}
console.log('===========================================================');
for (const allArrayElement of allArray) {
    if (typeof allArrayElement === 'string') {
        console.log(allArrayElement);
    }
}
console.log('===========================================================');
const newEmptyArray = [];
newEmptyArray[0] = 1;
newEmptyArray[1] = 6000;
newEmptyArray[2] = 'Mazda';
newEmptyArray[3] = 100;
newEmptyArray[4] = 'Toyota';
newEmptyArray[5] = 'BMV';
newEmptyArray[6] = true;
newEmptyArray[7] = 'BYD';
newEmptyArray[8] = false;
newEmptyArray[9] = 'Tesla';
for (const newEmptyArrayElement of newEmptyArray) {
    console.log(newEmptyArrayElement);
}
console.log('===========================================================');
document.write('<br>');
for (let i = 0; i < 10; i++) {
    console.log(`current loop step: : ${i} `);
    document.write(`<p>current loop step : ${i}</p>`);
}
console.log('===========================================================');
document.write('<br>');
for (let i = 0; i < 100; i++) {
    console.log(`current loop step: : ${i} `);
    document.write(`<p>current loop step : ${i}</p>`);
}
console.log('===========================================================');
document.write('<br>');
for (let i = 0; i < 100; i+=2) {
    console.log(`current loop step: : ${i} `);
    document.write(`<p>current loop step : ${i}</p>`);
}
console.log('===========================================================');
document.write('<br>');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
    console.log(`current loop step: : ${i} `);
    document.write(`<p>current loop step : ${i}</p>`);
    }
}
console.log('===========================================================');
document.write('<br>');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(`current loop step: : ${i} `);
        document.write(`<p>current loop step : ${i}</p>`);
    }
}