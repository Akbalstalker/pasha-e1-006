const R2D2 = {};
Object.defineProperty(R2D2, "E",  {value: 2.718281828459045, configurable: false, writable: false});
Object.defineProperty(R2D2, "PI", {value: 3.14159265359, configurable: false, writable: false});
R2D2.pow = function pow(x, n) {
	if (typeof x === 'undefined' || typeof n === 'undefined') {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN(x) || isNaN(n)) {
		alert ('Ввели бред')
	} else if (n > 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
};
R2D2.max = function max(a,b) {
	if (typeof a === 'undefined' || typeof b === 'undefined') {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN(a) || isNaN(b)) {
		alert ('Ввели бред')
	} else if (a > b) {
	return a
	} else {
	return b
	}
};

R2D2.min = function min(a,b) {
	if (typeof a === 'undefined' || typeof b === 'undefined') {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN(a) || isNaN(b)) {
		alert ('Ввели бред')
	} else if (a < b) {
	return a
	} else {
	return b
	}
};

R2D2.add = function add(a,b) {
	if (typeof a === 'undefined' || typeof b === 'undefined') {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN(a) || isNaN(b)) {
		alert ('Ввели бред')
	} else {
 return +a + +b
}
};


R2D2.diam = function diam(l) {
	if (typeof l === 'undefined') {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN (l)) {
		alert ('Ввели бред')
	} else {
	return l/3.14
	}
};

R2D2.disc = function disc(a,b,c) {
	if (typeof a === 'undefined' || typeof b === 'undefined' || typeof c === 'undefined' ) {
		alert ('Пропустили аргумент или вызвали метод без аргументов')
	} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
		alert ('Ввели бред')
	} else {
	return b * b - 4 * a * c
	}
};

// Дополнительные требования

//     Каждый метод имеет проверки: 1) на NaN -- ввели бред; 2) на undefined -- пропустили аргумент или вызвали метод без аргументов; 3) в методах, которые используют сложение должны обрабатываться строчные значения. Проверка должна возвращать человекопонятную ошибку.
//     (!) Нельзя использовать глобальный объект Math для решения задач.
//     R2D2.PI и R2D2.E лучше всего сделать приватными свойствами (доступными только для чтения).


// Это правильно, что сначала должна срабатывать проверка на "undefined", затем проверка на "NaN" ???
