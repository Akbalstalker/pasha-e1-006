// const faq = document.getElementsByClassName('faq')
const question = document.getElementsByClassName('question');
 const answer = document.getElementsByClassName('answer');


for (var i = 0; i < question.length; i++) {
	question[i].addEventListener('click', function() {
		if(!(this.classList.contains('active'))) {
			for(var i = 0; i < question.length; i++) {
				question[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	})
}