// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.
let a = +prompt('Enter first number: ','');
let b = +prompt('Enter second number: ','');
if (a > b) {
    console.log(`a = ${a} and it is greater than b`);
} else if (a < b) {
    console.log(`b = ${b} and it is greater than a`);
} else if (a === b){
    console.log('a equal b');
} else {
    console.log('please, enter numbers');
}
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('Enter a number of the apartment: ','');
if (apartment >= 1 && apartment <=20) {
    console.log('I entrance');
} else if (apartment >= 21 && apartment <=48) {
    console.log('II entrance');
} else if (apartment >= 49 && apartment <=90) {
    console.log('III entrance');
} else {
    console.log('I do not know the apartment with this number');
}

// number в яку користувач задає числове значення, якщо змінна рівна 10 вивести повідомлення ВІРНО,
// якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt('Enter your number: ','');
if (number === 10) {
    console.log('It is true');
} else {
    console.log('It is false');
}

// НЕКОРЕКТНА УМОВА ЗАДАЧІ!!!!
// Ми маємо змінну x в яку користувач задає значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = prompt('Enter your value: ','');
if(typeof x === 'number') {
    console.log('1');
}
else if (typeof x === 'string') {
    console.log('2');
} else {
    console.log('I do not know what is it');
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша температура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = +prompt('Яка температура на вулиці?','');
if (temperature >= 10 && temperature <=22) {
    console.log('Йдемо вчитися');
} else {
    console.log('Сидимо вдома');
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let z = +prompt('Enter your lucky number: ', '');
switch (z) {
    case 1:
        console.log('You won the car');
        break;
    case 2:
        console.log('You won the bike');
        break;
    case 3:
        console.log('You won the phone');
        break;
    case 4:
        console.log('You won the laptop');
        break;
    case 5:
        console.log('You won the watch');
        break;
    default:
        console.log('This number is incorrect');
}