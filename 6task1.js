// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.
let arr = [3, null, 2, 0, 'sos', 4, 0, 0];
function countOfNumbers(arr) {
    let countZero = 0;
    let countEven = 0;
    let countOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] === 0) {
                countZero++;
            } else if ((arr[i] % 2 === 0) && (arr[i] !== 0)) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }
    console.log(`Нулевых элементов: ${countZero}`);
    console.log(`Четных элементов: ${countEven}`);
    console.log(`Нечетных элементов: ${countOdd}`);
}
countOfNumbers(arr);