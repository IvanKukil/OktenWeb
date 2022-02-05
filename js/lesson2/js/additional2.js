// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if(friends.length >= 3) {
    console.log('This is the large array and he has more than 3 elements');
} else {
    console.log('This is array and he has less than 3 elements');
}

// Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let k = +prompt('Enter k: ', '');
let l = +prompt('Enter l: ', '');
let m = +prompt('Enter m: ', '');

if (((k > l) && (k < m)) || ((k < l) && (k > m))) {
    console.log(k);
} else if (((l > k) && (l < m)) || ((l < k) && (l > m))) {
    console.log(l);
} else {
    console.log(m);
}
//   - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let a = +prompt('Enter a: ', '');
let b = +prompt('Enter b: ', '');
let result = (a + b < 4) ? (
    console.log('Мало')
) : (
    console.log('Багато'));

//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let value = +prompt('Enter your number: ','');

    (value < 0) ? (console.log('Negative')) : (value > 0) ? (console.log('Positive')) : (console.log('It is a zero'));