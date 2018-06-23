const faq = document.getElementsByClassName('faq')[0];
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName('answer');

 faq.addEventListener('click', (e) => {
 		console.log (e)
 		const target = e.target;
 	if (target.classList.contains('question')) {
 		target.nextElementSibling.classList.toggle('active')
 	} 
 })








// const faq = document.getElementsByClassName('faq')
// const question = document.getElementsByClassName('question');
//  const answer = document.getElementsByClassName('answer');

// question.addEventListener('click', function(e) {
// 	question.forEach(function(item,i,question) {
// 		question.classList.add('question-active');
// 		answer.classList.add('active');
// 		if (activePanel) {
// 			activePanel.answer.classList.remove('active');
// 		}
// 		const activePanel = (activePanel === this) ? 0 : this;
// 	})
// });