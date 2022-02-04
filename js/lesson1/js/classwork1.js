function randArraySum(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = 400 + Math.floor(Math.random() * (500 + 1 - 400));  //min + Math.random() * (max + 1 - min);
    }
    console.log(arr);
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += arr[i];
    }
    return result;
}

console.log('Sum of 10 random elements = ' + randArraySum(10));

// const person = new Object();
// person.name = "John";               // "string"
// person.age = 21;                    // "number"
// person.marriage = true;             // "boolean"
// person.fakeVariable;                // "undefined"
// person.dateOfFirstMarriage = null;  // "null"

const book1 = {
    name: 'The Richest Man in Babylon',
    pages: 144,
    genre: 'Self-help book',
}

const book2 = {
    name: 'The Perfect Weapon',
    pages: 381,
    genre: 'techno-thriller novel',
    author: 'David E. Sanger',
}

//Створити маис об'єктів book з наступними полями
// Вивести кожну книгу як окремий об'єкт
function outputObject (myObject) {
    for (let key in myObject) {
        console.log(myObject[key]);
    }
}

const books = {
    babylon: {
        name: 'The Richest Man in Babylon',
        pages: 144,
        genre: 'Self-help book',
    },
    weapon: {
        name: 'The Perfect Weapon',
        pages: 381,
        genre: 'techno-thriller novel',
        author: 'David E. Sanger',
    },
}

outputObject(books);

//     5. Напишіть код, який вираховує площу прямокутника висотою 23см та шириною 10см
//     Значення площі зберігати в змінній s.

function squareOfRectangle(height,width) {
    let s = height * width;
    return s.toFixed(2);
}

console.log('Square of rectangle is: ' + squareOfRectangle(23, 10));
//     6. об'єм циліндра заввишки 10м та діаметром основи 4м,
//     результат помістіть у змінну v.

function volumeOfCylinder(height,diameter) {
    const P = 3.14;
    let v = P * (diameter/2)**2 * height;
    return v.toFixed(2);
}

console.log('Volume of cylinder is: ' + volumeOfCylinder(10, 8));
//     7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//     Знайдіть гіпотенузу k за теоремою Піфагора

function hypotenuse(n,m) {
    // let k = Math.sqrt(n**2 + m**2);
    let k = Math.sqrt(Math.pow(n,2) + Math.pow(m,2));
    return k;
}

console.log('Hypotenuse of a right triangle by Pythagoras theorem is ' + hypotenuse(3,4)); // ??? How add Pythagoras'


//     - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
//     (в першу, другу, третю чи четверту частину години).

function randomTime (min, max) {
    let randTime = Math.floor(min + Math.random() * (max + 1 - min));
    if (randTime >= 0 && randTime <=15) {
        console.log('I quarter');
    } else if (randTime >=16 && randTime <=30){
        console.log('II quarter');
    } else if (randTime >= 31 && randTime <= 45) {
        console.log('III quarter');
    } else {
        console.log('IV quarter');
    }
    return randTime;
}

console.log(randomTime(0, 59));