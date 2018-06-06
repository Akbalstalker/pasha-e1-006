// const items = new Array();


// function addltem(thing) {
// 	if (typeof thing === 'string') {
// 		console.log()
// 	} else {
// 		console.log("Введите значение")
// 	}
// }



const items = [];

const addItem = (thing) => {
  if (typeof thing === 'string') {
    items.push(thing);
    console.log(`Ты добавил ${thing}.`);
  } else if (thing === undefined) {
    console.log('Введите значение');
  } else {
    console.log('Введите корректное значение или системная ошибка');
  }

const deleteItem = (thing) => {
	items.forEach(function(element,i){
		if (element === thing) {
			// console.log ('Равняется')
			items.splice (i,1);
			console.log

		}
	})
}

}

addItem('onion');
addItem('tomato');
addItem('pickle');
addItem(1);