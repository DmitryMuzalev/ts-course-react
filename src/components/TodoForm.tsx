import { ITodoForm } from "../types";

export default function TodoForm({ value, onChange, onClick }: ITodoForm) {
  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-form__field"
        placeholder="Add a new task..."
        onChange={onChange}
        value={value}
      />
      <button type="button" className={"todo-form__btn"} onClick={onClick}>
        add
      </button>
    </div>
  );
}
