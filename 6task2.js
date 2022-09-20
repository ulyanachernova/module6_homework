// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
// является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
function isNumberPrime(num) {
    if ((num > 1) && (num < 1000)) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return`Число составное`;
            }
        } return `Число простое`;
    } else {
        return`Данные неверны`;
    }
}
console.log(isNumberPrime(1020));
console.log(isNumberPrime(0));
console.log(isNumberPrime(1));
console.log(isNumberPrime(2));
console.log(isNumberPrime(31));
console.log(isNumberPrime(49));
console.log(isNumberPrime(13));