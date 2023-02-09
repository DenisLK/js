// Задание № 1

function cube(num) {
    let res = num * num * num;
    return res;
}
console.log(cube(2));
console.log(cube(3));


// Задание № 2

function salary(money){
    console.log(`Зарплата после вычета: ${money * 0.87}`);
}
    
let money = prompt('Введите размер вашей зарплаты');
isFinite(money)? salary(money) : console.log('Ошибка, нужно ввести цифры');


// Задание № 3

function getMinimal(userNumber1, userNumber2, userNumber3) {
    if (userNumber1 > userNumber2) {
        if (userNumber1 > userNumber3) {
            console.log(`${userNumber1} наибольшее число`);
        } else {
            console.log(`${userNumber3} наибольшее число`);
        }
    } else { if (userNumber2 > userNumber3) {
        console.log(`${userNumber2} наибольшее число`);
    } else {
        console.log(`${userNumber3} наибольшее число`);
    }
        
}
}
getMinimal(userNumber1 = Number(prompt('Введите первое число')),
 userNumber2 = Number(prompt('Введите второе число')), 
 userNumber3 = Number(prompt('Введите третье число')));


// Задание № 4

const sum = (userNum1, userNum2) => {return (userNum1 + userNum2);}
const diff = (userNum1, userNum2) => {
    if (userNum1 > userNum2) {
        return(userNum1 - userNum2);
    } else {
        return(userNum2 - userNum1);
    }
}
const mult = (userNum1, userNum2) => {return(userNum1 * userNum2);}
const div = (userNum1, userNum2) => {return(userNum1 / userNum2);}

console.log(`Сумма чисел равна: ${sum(2,6)}`);
console.log(`Разность большего с менишим числом равна:${diff(2,6)}`);
console.log(`Произведение чисел равно: ${mult(2,6)}`);
console.log(`Частное чисел равно: ${div(2,6)}`);

