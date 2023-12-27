import { ITodoItem } from "../types";

export default function TodoItem({
  id,
  title,
  completed,
  onRemove,
  onToggle,
}: ITodoItem) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        className={"todo-item__checkbox"}
        onChange={() => onToggle(id)}
      />
      <span className="todo-item__title">{title}</span>
      <span className="todo-item__remove-btn" onClick={() => onRemove(id)}>
        &times;
      </span>
    </li>
  );
}
