// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone

}

const userArr = [
    new User(2, 'Olga', 'Mitchell', 'olga.m@gmail.com', 380678074447),
    new User(12, 'Anton', 'Vara', 'antovar@gmail.com', 380678074448),
    new User(20, 'Julia', 'Shir', 'jushir@gmail.com', 380678074449),
    new User(11, 'John', 'Smith', 'john.smith@gmail.com', 380678074440),
    new User(8, 'Frank', 'Martin', 'frank.martin@gmail.com', 380678074441),
    new User(40, 'Aster', 'Johnson', 'astjo@gmail.com', 380678074442),
    new User(52, 'Itachi', 'Uchiha', 'itachi.uchiha@gmail.com', 380678074443)
];

console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterUser = userArr.filter(user => user.id % 2 === 0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortUser = userArr.sort((a, b) => a.id - b.id);
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

const emptyArray = [
    new Client(10, 'Bertold', 'Hofner', 'bertold.hofner@gmail.com', 380972312105, ['history', 'world', 'book']),
    new Client(34, 'Eron', 'Yeger', 'eron.yeger@gmail.com', 380688042842, ['smartphone', 'android', 'meizu']),
    new Client(45, 'Mikasa', 'Akerman', 'mikasa.akerman@gmail.com', 380671949273, ['games', 'ps5']),
    new Client(12, 'Joster', 'Johnson', 'joster.johnson@gmail.com', 380633071428, ['newspaper']),
];
console.log(emptyArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortCLients = emptyArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortCLients);