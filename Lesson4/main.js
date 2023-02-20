// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square(num1, num2) {
    return num1 * num2;
}
square(5, 6);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sqO(r) {
    return 3.14 * r * r;
}
sqO(4,);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sqC(r, h) {
    let pi = 3.14;
    return (((2 * pi * r * h) + (2 * pi * (r * r))));
}
sqC(20,80);

// - створити функцію яка приймає масив та виводить кожен його елемент

function massE(arr1) {
    for (let stuff of arr1){
        console.log(stuff);
    }
}
massE();
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragStuff (stuff){
    document.write(`<p>${stuff}</p>`)
}
paragStuff('my wold');
paragStuff(100500);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з li. Текст li задати через аргумент всім однаковий.

function liStuff(txt){
    document.write(`<ul>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`<li>${txt}</li>`);
    document.write(`</ul>`);
}
liStuff('bye');
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function liStuffSc(txt, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${txt}</li>`);
    }
    document.write(`</ul>`);
}
liStuffSc('go', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві) та будує для них список

function listStuff(arr){
    document.write('<ul>')
    for (const stuff of arr){
        document.write(`<li>${stuff}</li>`)
    }
    document.write('</ul>')
}
listStuff(['dfdfdf',true,45454]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function arrOBj(obj) {
    for (const stuff of obj) {
        document.write(`<div>${stuff.id} ${stuff.name} ${stuff.age}</div>`)
    }
}
arrOBj();
// - створити функцію яка повертає найменьше число з масиву

function minNum(nums) {
    let low = nums[0];
    for (const numf of nums) {
        if (low > numf) {
            low = numf
        }
    }
    return low;
}
minNum([1, -100, 50, 0]);

// - створити функцію sum(arr)яка приймає масив чисел,сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(nums0) {
    let case1 = 0;
    for (const nums0Key of nums0) {
        case1 = case1 + nums0Key;
    }
    return case1;
}
sum();
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах.// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let f1 = arr[index1];
//     let f2 = arr[index2];
//
//     arr[index1] = f2;
//     arr[index2] = f1;
//     return arr;
// }
// swap([5,7,-8], 55, 22)
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(uah, currencies, exitCurrency) {

    for (const stuff of currencies) {
        if (stuff.currency === exitCurrency) {
            return uah / stuff.value;
        }
    }
}

console.log (exchange(
    10000,
    [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42},
        {currency: 'GBP', value: 50}
    ],
    'USD'
));