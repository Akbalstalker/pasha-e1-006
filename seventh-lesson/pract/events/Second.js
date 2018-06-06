const input = document.querySelector('.control__input');
const saveButton = document.querySelector('.control__btn');
const todoList = document.querySelector('.tasks');

saveButton.addEventListener('click', function() {
 const task = document.createElement('li');
 task.innerHTML = `<span>blakm k md</span>
   `
   todoList.appendChild(task);
});

// todoList.addEventListener('click', function(event) {
//  const el = event.target;
//  console.log(event)
//  if (el.className === 'task_delete') {
//   el.parentNode.remove();
//  }
// });
