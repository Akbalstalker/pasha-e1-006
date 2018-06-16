// Задание 1
let i = 10;
while (i >= 0) {
  if (i % 2 === 0) {
    document.write(i);
  }
  --i;
}

// Задание 3
const login = prompt('Введите логин', 'User');

if (login === 'Admin') {
  var password = prompt('Введите пароль');
  if (password === 'MeGaHaTsKer_666') {
    alert('Добро пожаловать, Admin');
  } else if (password === null) {
    alert('Введите пароль');
  } else if (password !== 'MeGaHaTsKer_666') {
    alert('Введеный пароль не правильный');
  } else {
    alert('Введите корректный пароль');
  }
} else if (login === 'User') {
  var password = prompt('Введите пароль');
  if (password === 'qwerty1234') {
    	alert('Добро пожаловать, User');
  } else if (password === null) {
    	alert('Введите пароль');
  } else if (password !== 'qwerty1234') {
    	alert('Введеный пароль не правильный');
  } else {
    	alert('Введите корректный пароль');
  }
} else {
  alert('Такого логина нет в системе');
}

// Задание 2
const isAdmin = true;
const result = (isAdmin) ? 'Привет Admin!' : 'Привет, ты не Админ';
alert(result);


// Задание 4
const age = +prompt('Сколько тебе лет?', '12');
switch (age) {
  case 12 : alert('Слишком мало :('); break;
  case 16 : alert('Почти достаточно :['); break;
  case 18 : alert('Вот сейчас в самый раз! :)'); break;
  default : alert('Возраст не определен %)');
}
