// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.
function func(num1) {
    return function(num2) {
        return num1 + num2;
    };
}
let sum = func(2)(6);
console.log(sum);