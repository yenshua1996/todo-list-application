const Todo = ({ todo, toggle }) => {
  return (
    <li>
      <p className={todo.isCompleted ? "finish" : ""}>{todo.input}</p>

      <button
        onClick={() => {
          toggle(todo.id);
        }}
      >
        Check
      </button>
    </li>
  );
};

export default Todo;
