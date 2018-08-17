const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let pwInput;

do {
    pwInput = prompt('Введите пароль');
    attempts--;
    switch (true) {
        case passwords.includes(pwInput):
            alert('Добро пожаловать!');
            break;
        case pwInput === null:    
            alert('До свиданья');
            break;
        case attempts === 0:
            alert('У вас закончились попытки');
            break;
        default:
            alert(`Неверный пароль. Попробуйте еще раз. У вас осталось ${attempts} попыток`)
    }

}   while ((!passwords.includes(pwInput)) && (attempts > 0) && (pwInput !== null))
