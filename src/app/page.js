'use client'; 
import React from "react";
import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOList from "@/components/TODOList";
function Home() {
  //todos- текущие заметки, setTodos- обновление заметок
  const [todos, setTodos] = React.useState([]);
  /*Наш объект- запись:
  {
    name: "",  // string
    title: "Some task",  // string
    date: some date,  // string
    id: self.crypto.randomUUID(), // string
    is_completed: false // boolean
  } */

//Загрузка из локального хранилища:
    React.useEffect(() => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    }, []);

  return (
    <div className="wrapper">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Home;