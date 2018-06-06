const par = document.getElementsByClassName('paragraph') [0];



// par.onclick = function () {
// 	par.innerHTML = 'New value';
// 	alert ('Clicked')
// };  Уже не работает
// par.onclick = function () {
// 	this.innerHTML = 'New new value';
// };
// console.log (par)



// Эта штука - 

par.addEventListener ('click', () => {
	par.innerHTML = 'Nev value';
});
 console.log (par)   

 // У стрелочных функций нету своего this  



