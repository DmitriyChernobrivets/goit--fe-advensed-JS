let userInput;
const numbers = [];
let sum = 0;

do {
    userInput = prompt('Введите число');
    const isValidInput = !isNaN(userInput) && (userInput !== "") && (userInput !== " ");
    switch (true) {
        case userInput === null:
            const isFull = numbers.length > 0 ? true : false;
            if (isFull) {
                for (const value of numbers) {
                    sum += value;
                }
                alert(`Сумма введенных чисел равна:   ${sum}`);

            } else {
                alert('Приходите еще!')
            }
            break;
        case isValidInput:
            numbers.push(Number(userInput));
            break;
        default:
            alert('Введено не число')
    }
} while (userInput !== null)