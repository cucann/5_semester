//Удаление первого и последнего элемента массива. Удалите первый и
//последний элементы массива с помощью методов shift() и pop().

let numbers = [6, 7, 8, 9, 10];

console.log("Исходный массив:", numbers);

let firstElement = numbers.shift();
console.log("Удаленный первый элемент:", firstElement);

let lastElement = numbers.pop();
console.log("Удаленный последний элемент:", lastElement);

console.log("Измененный массив:", numbers);
