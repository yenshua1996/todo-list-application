const Todo = ({ todo, toggle }) => {
  return (
    <li>
      <p className={todo.isCompleted ? "finish" : ""}>{todo.input}</p>

      <button
        onClick={() => {
          toggle(todo.id);
        }}
        className="check__btn"
      >
        Check
      </button>
    </li>
  );
};

export default Todo;
