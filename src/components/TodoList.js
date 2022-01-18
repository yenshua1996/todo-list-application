import Todo from "./Todo";

const TodoList = ({ todoList, toggle, filter }) => {
  return (
    <ul>
      {todoList.map((todo) => {
        return (
          <Todo todo={todo} toggle={toggle} filter={filter} key={todo.id} />
        );
      })}
    </ul>
  );
};

export default TodoList;
