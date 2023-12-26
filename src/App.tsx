import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { ITodoItem } from "./types";
import TodoItem from "./components/TodoItem";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodoItem[] | null>(null);

  const newTodo: ITodoItem = {
    userId: 1,
    id: new Date().getMilliseconds(),
    title: text,
    completed: false,
  };

  const addNewTodo = () => {
    todos && setTodos([...todos, newTodo]);
    setText("");
  };

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    fetch(BASE_URL + "?_limit=20")
      .then((response) => response.json())
      .then((json: ITodoItem[]) => setTodos(json));
  }, []);

  return (
    <div className="app">
      <TodoForm value={text} onChange={handlerInput} />
      <ul className="todo-list">
        {!!todos &&
          todos.map((t) => {
            return <TodoItem key={t.id} {...t} />;
          })}
      </ul>
    </div>
  );
}

export default App;
