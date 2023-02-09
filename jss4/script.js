// задача № 1

const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (element == 0) {
        console.log(`${element} это ноль`);
    } else {
        if (element % 2 == 0) {
            console.log(`${element} это четное число`);
        } else {
            console.log(`${element} это нечетное число`);
        }

    }
}


// Задача № 2

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3,2);
console.log(arr2);


// Задача № 3

const arr3 = [];
for (let i = 0; i < 5; i++) {
    arr3.push(Math.round(Math.random() * 9))
}
let sum = 0
for (let i = 0; i < arr3.length; i++) {
    let element = arr3[i];
    sum += element;
}
let min = arr3[0]
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < min) {
        min = arr3[i]
    } else {
        continue
    }
}
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] == 3) {
       console.log(`В массиве есть ${arr3[i]}`);
    } else {
        continue
    }
    
}

console.log(arr3);
console.log(sum); 
console.log(min);


// Задача № 4

const arr4 = [];
let pic = '';
for (let i = 0; i < 20; i++) {
    pic = pic + 'x';
    console.log(pic);
}
