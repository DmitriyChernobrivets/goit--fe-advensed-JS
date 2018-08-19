// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// const userInput = prompt('Введите пароль');

// const isLoginValid =  (login) => login.length >= 4 && login.length <= 16 ? true : false;
// const isLoginUnique = (allLogins, login) => allLogins.includes(login) ? true : false;
// const message = (val) =>  alert(val);

// const addLogin =  (login, callback) => {
//     switch (true) {
//         case userInput === null: 
//             return callback('Приходите еще');
//         case !isLoginValid(login):
//             return callback('Ошибка! Логин должен быть от 4 до 16 символов');
//         case !isLoginUnique(logins, login):
//             callback('Логин успешно добавлен!');
//             return logins.push(login);    
//         default:
//             return callback('Такой логин уже используется!');
//     }
// };

// addLogin(userInput, message);

//=============================================================================================

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = (login) => login.length >= 4 && login.length <= 16 ? true : false;
const isLoginUnique = (allLogins, login) => allLogins.includes(login) ? true : false;
const message = (val) => alert(val);

const addLogin = (callback) => {
    let userInput;
    while (userInput !== null) {
        userInput = prompt('Введите пароль');
        switch (true) {
            case userInput === null:
                return callback('Приходите еще');
            case !isLoginValid(userInput):
                callback('Ошибка! Логин должен быть от 4 до 16 символов');
                break;
            case !isLoginUnique(logins, userInput):
                callback('Логин успешно добавлен!');
                return logins.push(userInput);
            default:
                callback('Такой логин уже используется!');
                break;
        }
    }
};

addLogin(message);