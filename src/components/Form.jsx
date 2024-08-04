function Form({ todos, setTodos }) {
    const handleSubmit = (event) => {//по нажатию кнопки
      event.preventDefault();
      //получаем введенные данные:
      const name = event.target.title.value;
      const deal = event.target.todo.value;
      const deadline = event.target.deadline.value;
      //проверка на пустые поля:
      if(name==''|| deal==''||deadline==''){
        if(name==''){
          event.target.title.id = 'empty';
        }
        else{event.target.title.removeAttribute('id');}
        if(deal==''){
          event.target.todo.id = 'empty';
        }
        else{event.target.todo.removeAttribute('id');}
        if(deadline==''){
          event.target.deadline.id = 'empty';
        }
        else{event.target.deadline.removeAttribute('id');}
      }
      else{
        const newTodo = {
          title: name+" "+deal+" "+deadline,
          id: self.crypto.randomUUID(),
          is_completed: false,
        };
        //Добавляем новую задачу
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        //убираем все красные поля
        event.target.title.removeAttribute('id');
        event.target.todo.removeAttribute('id');
        event.target.deadline.removeAttribute('id');
        //помещаем список дел в локальное хранилище:
        const updatedTodoList = JSON.stringify([...todos, newTodo]);
        localStorage.setItem("todos", updatedTodoList);

        // обновление формы
        event.target.reset();
      }
      
    };
    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Название"
          />
        </label>
        <label htmlFor="todo">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Напишите свою задачу"
          />
        </label>
        <label htmlFor="title">
          <input
            type="text"
            name="deadline"
            id="deadline"
            placeholder="Дедлайн"
          />
        </label>
        <button>
          <span className="visually-hidden">Submit</span>
          Добавить
        </button>
      </form>
    );
  }
  export default Form;