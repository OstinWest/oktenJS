// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [1, 2, 'hello', true]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
const book = {
    title: 'book',
    pageCount: 200,
    gender: 'comedy',
    authors: [
        {
            name1: 'Vasya',
            age1: 55
        },
        {
            name2: 'Olis',
            age2: 33
        },
        {
            name3: 'Oleh',
            age3: 20,
        }
    ]
}
console.log(book);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrUsers = [
    {password: 12121212, name: 'Vova', username: 'Gfdf'},
    {password: 222222, name: 'Ann', username: 'sss2'},
    {password: 1212333331212, name: 'Bob', username: 'dfdf21'}
];
console.log(arrUsers[0].password)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log('Не вірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 100;
if (time >= 0 && time <= 15) {
    console.log('Перша четверть');
} else if (time > 15 && time <= 30) {
    console.log('Друга четверть');
} else if (time > 30 && time <= 45) {
    console.log('Третя четверть');
} else if (time > 45 && time <= 60) {
    console.log('Четверта четверть');
} else {
    console.log('Think about it, bb');
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let mDay = 32;
if (mDay >= 1 && mDay <= 10) {
    console.log('Перша декада');
} else if (mDay > 10 && mDay <= 20) {
    console.log('Друга декада');
} else if (mDay > 20 && mDay <= 31) {
    console.log('Третя декада');
} else {
    console.log('Think about if, bb');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let studentsDay = 88;
switch (studentsDay) {
    case 1:
        console.log('Math, Geography, Music, Art');
        break;
    case 2:
        console.log('Day OFF');
        break;
    case 3:
        console.log('Meditation');
        break;
    case 4:
        console.log('History');
        break;
    case 5:
        console.log('Day OFF');
        break;
    case 6:
        console.log('Party');
        break;
    case 7:
        console.log('Prepare to Monday');
        break;
    default:
        console.log('Are u UFO? :)');
}

//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let q = 100;
let k = 5000;
if (q > k) {
    console.log(q);
} else if (q < k) {
    console.log(k);
} else if (q === k) {
    console.log('They are the same');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподібні, тобто приводиться до false)
let h = '';
let res = h || 'default';
console.log(res);

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}