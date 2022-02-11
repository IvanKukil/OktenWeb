//  У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
//  місяця потрапляє це число (у першу, другу чи третю).

function randomDay (min, max) {
    let day = Math.floor(min + Math.random() * (max + 1 - min));
    if (day >= 1 && day <=10) {
        console.log('I quarter');
    } else if (day >=11 && day <=20){
        console.log('II quarter');
    } else {
        console.log('III quarter');
    }
    return day;
}

console.log(randomDay(1, 31));
//    змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test; //undefined - false
if (!!test) {
    console.log('It is true from IF');
} else {
    console.log('It is false from ELSE');
}

// ternary
function testTrue (test) {
    return (test ? 'It is true value FROM the ternary operator' : 'It is false value FROM the ternary operator');
}

console.log(testTrue(true));
console.log(testTrue(false));

// console.log(testTrue(confirm('Choose your value (OK - true, Cancel - false)')));

//    Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//    Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -1;
if (a !== 0) {
    console.log('true');
} else {
    console.log('false');
}

//    Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
//    і на екрані відображається інфа що заплановано на цей день.
switch (+prompt('Enter the day number of the week:','')) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('It is not the day number of the week');;
}

//    Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('Введіть рік: ', '');
if (year % 4 === 0) {
    console.log('Рік високосний');
} else {
    console.log('Рік не високосний');
}
//    Використовуючи if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//    Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше: «Не знаєте? ECMAScript!

let nameOfJS = prompt('Яка «офіційна» назва JavaScript?','');
if (nameOfJS === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}