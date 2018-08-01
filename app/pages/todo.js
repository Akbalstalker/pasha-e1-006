const todo = {
  tasks: [],
  addTask(title, desc, dueDate) {
    if (typeof title === 'string' && typeof desc === 'string' && typeof dueDate === 'string') {
      this.tasks.push({ title, desc, dueDate });
      // this - иначе ищеться в глобальном окне
      console.log(`Ты добавил ${title}, ${desc}, ${dueDate}.`);
    } else if (title === undefined && desc === undefined && dueDate === undefined) {
      console.log('Введите значение');
    } else {
      console.log('Введите корректное значение или системная ошибка');
    }
  },
  // Метод getTasks(date), сверяет dueDate объектов и переданный date
  // и возвращает массив объектов-дел или сообщение о том,
  // что таск не найден. Если дата не передана, то возвращает все таски.
  getTasks(date) {
    const compare = todo.tasks.filter((el) => {
      if (date === el.dueDate) {
        return el;
      }
    });
    if (compare.length !== 0) {
      console.log(compare);
    } else {
      console.log(`Тасков на ${date} нет`);
    }
  },
  deleteTasks(title) {
    this.tasks.forEach((el, i, arr) => {
      console.log(i);
      if (el.title === title) {
        arr.splice(i, 1);
      }
    });
  },
};

todo.addTask('test', 'test23', '20.03.2018');
todo.addTask('test', 'test23', '20.03.2018');
todo.addTask('test', 'test23', '22.03.2018');
todo.addTask('test', 'test23', '21.03.2018');
todo.addTask('test', 'test23', '21.03.2018');
todo.getTasks('20.03.2018');
todo.getTasks('26.06.2018');
todo.deleteTasks('test');
console.log(todo.tasks);
