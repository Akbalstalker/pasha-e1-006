// const qestion = document.querySelector('.qestion');
// const answer = document.querySelector('.answer');
// qestion.addEventListener('click', function(){
// 	if (answer.style.display === 'none'){
// 		answer.style.display = 'block';
// 	} else {
// 		answer.style.display = 'none';
// 	}
	
// });

// Способ 1 


// const qestion = document.querySelector('.qestion');
// const answer = document.querySelector('.answer');
const questionContainer = document.querySelector('.faq');



// qestion.addEventListener('click', function(){
// 	if (answer.style.display === 'none'){
// 		answer.style.display = 'block';
// 	} else {
// 		answer.style.display = 'none';
// 	}
	
// });


questionContainer.addEventListener('click', function(e) {
  if (e.target.className === 'question') {
    if (e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  }
});