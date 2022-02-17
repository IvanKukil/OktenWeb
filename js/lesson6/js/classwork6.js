let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
const namesList = (string, symbol) => {
    let newArr = [];
    if (string.includes(symbol)) {
        let a = string.split(symbol);
        a.forEach((item) => {
           if (item) newArr.push(item);
       })
       console.log(newArr.join(' '));
   }
}
namesList(n1, '.');
namesList(n2, '-');
namesList(n3, '_');

const randomArr = (length, num) => {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * num));
    }
    return newArr;
}
const result = randomArr(10,100);
console.log(result);

const sortUp = result.sort((a,b) => a - b);
console.log(sortUp);
const sortDown = result.sort((a,b) => b - a);
console.log(sortDown);

const filter = result.filter(value => value % 2 === 0);
console.log(filter);

const stringMap = filter.map(item => item.toString());
console.log(stringMap);

const sortNums = direction => {
    if(direction === 'ascending') {
        return result.sort((a,b) => a - b);
    } else if(direction === 'descending') {
        return result.sort((a, b) => b - a);
    } else {
        return result;
    }
}

console.log(sortNums('ascending'));
console.log(sortNums('descending'));

const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newSort = coursesAndDurationArray.sort( (a, b) => b.monthDuration - a.monthDuration);
console.log(newSort);

const newFilter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(newFilter);

