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
const arr = stringToArray('Ревуть воли як ясла повні');
console.log(arr);
document.writeln(arr);

const array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let strings = array.map(value => value.toString());
console.log(strings);

let nums = [11, 21, 3];

const sortNums = (direction, arr) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration));

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));



let deckOfCards = [
    {
        cardSuit: null, // 'spade', 'diamond','heart', 'club'
        value: 'Joker', // '6'-'10', 'ace','jack','queen','king','joker'
        color: 'black', // 'red','black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 'ace',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 'king',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 'queen',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 'jack',
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 10,
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 10,
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 10,
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 10,
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 9,
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 9,
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 9,
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 9,
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 8,
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 8,
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 8,
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 8,
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 7,
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 7,
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 7,
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 7,
        color: 'red',
    },
    {
        cardSuit: 'spade',
        value: 6,
        color: 'black',
    },
    {
        cardSuit: 'club',
        value: 6,
        color: 'black',
    },
    {
        cardSuit: 'diamond',
        value: 6,
        color: 'red',
    },
    {
        cardSuit: 'heart',
        value: 6,
        color: 'red',
    }
]

let findAce = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findAce);

let findSix = deckOfCards.filter(value => value.value === 6);
console.log(findSix);

let redCards = deckOfCards.filter(value => value.color === 'red');
console.log(redCards);

let diamondCards = deckOfCards.filter(value => value.cardSuit === 'diamond');
console.log(diamondCards);

let filterSpade = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > 8 ||
    typeof value.value === 'string' && value.cardSuit === 'spade' || value.value === 'Joker' && value.color === 'black');
console.log(filterSpade);

let reduce = deckOfCards.reduce((accum, card) => {
    if (card.cardSuit === 'spade') {
        accum.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accum.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accum.hearts.push(card);
    } else if (card.cardSuit === 'club') {
        accum.clubs.push(card);
    } else {
        accum.joker.push(card);
    }
    return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[],
    joker:[]
}
);
console.log(reduce);

let str = '@$@%@$ Harry   *&*|764 Potter   (&^*&^^';

const norm = (st) => {
    let string = st.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') ?
    value : ' ').join('').trim();
    while (string.includes('  ')) {
        string = string.replace('  ', ' ');
    }
    return string;
}

console.log(norm(str));

// const insert_dash = str => {
//     return str.split(' ').join('-').toUpperCase();
// }
//
// document.writeln(insert_dash('HTML JavaScript PHP'));
//
// const delete_characters = (str, length) => {
//     return str.substr(0, length);
// }
//
// document.writeln(delete_characters('Ревуть воли як ясла повні', 6));
//
// const firstUp = str => {
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(firstUp('hello owu'));
//
// const capitalize = str => {
//     return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }
//
// console.log(capitalize('i love java script'));