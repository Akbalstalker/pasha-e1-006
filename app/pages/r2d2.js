const R2D2 = {};
R2D2.E = 2.718281828459045;
R2D2.PI = 3.14159265359;
R2D2.pow = function pow(x, n) {
	if (pow(x,n) == undefined) {
		alert ('&&&&&&&')
	}
	else if (isNaN (x,n)){
		alert ('Ввели бред')
	}
  else if (n > 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
};
R2D2.max = function max(a,b) {
if (a > b) {
	return a
} else {
	return b
}
};

R2D2.min = function min(a,b) {
if (a < b) {
	return a
} else {
	return b
}
};

R2D2.add = function add(a,b) {
 return +a + +b
};


R2D2.diam = function diam(l) {
	return l/3.14
};

R2D2.disc = function disc(a,b,c) {
	return b * b - 4 * a * c
};

// Дополнительные требования

//     Каждый метод имеет проверки: 1) на NaN -- ввели бред; 2) на undefined -- пропустили аргумент или вызвали метод без аргументов; 3) в методах, которые используют сложение должны обрабатываться строчные значения. Проверка должна возвращать человекопонятную ошибку.
//     (!) Нельзя использовать глобальный объект Math для решения задач.
//     R2D2.PI и R2D2.E лучше всего сделать приватными свойствами (доступными только для чтения).
