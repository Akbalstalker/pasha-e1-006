const par = document.getElementsByClassName('paragraph') [0];



// par.onclick = function () {
// 	par.innerHTML = 'New value';
// 	alert ('Clicked')
// };  Уже не работает
par.onclick = function () {
	this.innerHTML = 'New new value';
};
console.log (par)


