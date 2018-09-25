 'use strict';


const allUsersBtn = document.querySelector('.js-all-users');
const table = document.querySelector('tBody');
const byIdBtn = document.querySelector('.js-user-byId');
const inputId = document.querySelector('.byId');
const inputName = document.querySelector('.name');
const inputAge = document.querySelector('.age');
const addBtn = document.querySelector('.js-user-add');
const deleteBth = document.querySelector('.js-user-delete');
const deleteInput = document.querySelector('.delete');
const status = document.querySelector('.byId-err');

const getAllUsers = () => {
    return fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => {
            if (response.ok) return response.json();
        })
        .catch(error => console.log('ERR', error))
}

const getUserById = (id) => {
        inputId.value === "";
        return fetch(`https://test-users-api.herokuapp.com/users/${id}`)
        .then(response => {
            if(response.ok) return response.json();   
            throw new Error('Eror', response.status)            
        })
        .catch(error=> console.log(error))

}

const addUser = (name, age) => {
    
    return fetch('https://test-users-api.herokuapp.com/users', {
        method: 'POST',
        body: JSON.stringify({ name, age }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }})
        .then(response => {
            if (response.ok) return console.log(' Пользователь Успешно добавлен')
        })
        .catch(err => console.log(err))
    
}

const updateUser = (id, user) => {
   return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('ERROR' + error));
}

const removeUser = (id) => {
    return fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'DELETE'
      })
      .catch(error => console.log('ERROR' + error));
}

const byIdRender = ({ data }) => {
    table.innerHTML = tableTemplate(data);
}

const allUsersRender = ({ data }) => {
    const renderTable = data.reduce((acc, current) => {
        return acc + tableTemplate(current)
    }, "");

    table.innerHTML = renderTable;
}

//================Events=====================

const deleteUserHandler = (e) => {
    e.preventDefault();
    if (deleteInput.value === "") {
        status.innerHTML = "Заполните все поля!";
        return;
    }

    removeUser(deleteInput.value).then(() => {
        status.innerHTML = "Пользователь был удален";
        deleteInput.value = "";
    });
    
}
console.log(isNaN("asd"))
const addUserHandler = (e) =>{
    e.preventDefault();
    if (inputName.value === '' || inputAge.value === '') {
        status.innerHTML = 'Заполните все поля!';
        return;
    } else if (isNaN(inputAge.value)) {
        status.innerHTML = 'Ведите правильнный возраст';
        return;
    }
    addUser(inputName.value, inputAge.value).then(() => {
        status.innerHTML = "Пользователь добавлен";
        inputName.value = "";
        inputAge.value = "";
    });
    
}

const allUsersHandler = (e) => {
    e.preventDefault();
    getAllUsers().then(allUsersRender);
}

const byIdHandler = (e) => {
    e.preventDefault();
    if (inputId.value === "") {
        status.innerHTML = "Заполните все поля!";
        return;
    }
    getUserById(inputId.value).then(byIdRender).catch(() => {
        status.innerHTML = "Нету такого пользователя";
        inputId.value = ""
    });
    
}


const tableTemplate = ({ id, name, age }) => {
    return `<tr>
        <th>${id}</th>
        <th>${name}</th>
        <th>${age}</th>
    </tr>`
}

deleteBth.addEventListener('click', deleteUserHandler);
addBtn.addEventListener('click', addUserHandler)
byIdBtn.addEventListener('click', byIdHandler)
allUsersBtn.addEventListener('click', allUsersHandler);
