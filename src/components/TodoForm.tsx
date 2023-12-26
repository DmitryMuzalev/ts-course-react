import { ITodoForm } from "../types";

export default function TodoForm({ value, onChange }: ITodoForm) {
  return (
    <form className="todo-form">
      <input
        type="text"
        className="todo-form__field"
        placeholder="Add a new task..."
        onChange={onChange}
        value={value}
      />
      <button type="submit" className={"todo-form__submit-btn"}>
        add
      </button>
    </form>
  );
}
