import { ITodoItem } from "../types";

export default function TodoItem({ title, completed }: ITodoItem) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        className={"todo-item__checkbox"}
      />
      <span className="todo-item__title">{title}</span>
      <span className="todo-item__remove-btn">&times;</span>
    </li>
  );
}
