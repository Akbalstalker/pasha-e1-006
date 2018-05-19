// const isAdmin = true;

// if (isAdmin) {
// 	alert (`Привет Admin!`);
// } else {
// 	alert (`Привет, ты не Админ`);
// }

const isAdmin = true;
const result = (isAdmin)? `Привет Admin!` : `Привет, ты не Админ`;
alert(result);

// Перепиши if...else на switch:

const age = +prompt('Сколько тебе лет?', '12');

// if (age === 12) {
// 	alert('Слишком мало :(');
// } else if (age === 16) {
// 	alert('Почти достаточно :[');
// } else if (age === 18) {
// 	alert('Вот сейчас в самый раз! :)');
// } else {
// 	alert('Возраст не определен %)');
// }

switch (age){
	case 12 : alert ('Слишком мало :('); break;
	case 16 : alert ('Почти достаточно :['); break;
	case 18 : alert ('Вот сейчас в самый раз! :)'); break;
	default : alert('Возраст не определен %)');