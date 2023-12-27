import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { ITodo } from "./types";
import TodoItem from "./components/TodoItem";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<ITodo[] | null>(null);

  const newTodo: ITodo = {
    userId: 1,
    id: new Date().getMilliseconds(),
    title: text,
    completed: false,
  };

  const toggleCompleted = (id: number) => {
    todos &&
      setTodos(
        todos.map((t) => {
          if (t.id === id) {
            return { ...t, completed: !t.completed };
          } else return t;
        })
      );
  };

  const removeTodo = (id: number) => {
    todos && setTodos(todos.filter((t) => t.id !== id));
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
      .then((json: ITodo[]) => setTodos(json));
  }, []);

  return (
    <div className="app">
      <TodoForm value={text} onChange={handlerInput} onClick={addNewTodo} />
      <ul className="todo-list">
        {!!todos &&
          todos.map((t) => {
            return (
              <TodoItem
                key={t.id}
                {...t}
                onRemove={removeTodo}
                onToggle={toggleCompleted}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default App;
