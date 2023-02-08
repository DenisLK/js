//Задача № 1
let num1 = Number(prompt('Введите первое число'));
(num1 <= 1)? alert('число меньше или равно 1') : alert('число больше 1');
let num2 = Number(prompt('Введите второе число'));
(num2 >= 3)? alert('число больше или равно 3') : alert('число меньше 3');


//Задача № 2
let test = true;
(test === true) ? console.log('+++') : console.log('---');

//Задача № 3
let number = Math.floor(Math.random() * (1, 31) + 1);
console.log(number);
if (number <= 10) {
    console.log('первая декада');
} else {
    (number <= 20)? console.log('вторая декада'):console.log('третья декада');
}

//Задача № 4
let userNum = (prompt('Введите число'));
let units = userNum % 10;
let dozens = Math.trunc(userNum / 10) % 10;
let hundreds = Math.trunc(userNum / 100) % 10;


console.log(`введенное число: ${userNum}
сотен: ${hundreds}
десятков: ${dozens}
едениц: ${units}`);