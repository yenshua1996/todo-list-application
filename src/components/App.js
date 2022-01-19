import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  // Data
  const [todoList, setTodoList] = useState([
    { id: 1, input: "Creating a todo list app", isCompleted: false },
    { id: 2, input: "Writing a React app", isCompleted: false },
    {
      id: 3,
      input: "Reviewing React concept.",
      isCompleted: false,
    },
    { id: 4, input: "Handling Error properly", isCompleted: true },
  ]);

  //Toggle check todo
  const handleToggle = (id) => {
    let mapped = todoList.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : { ...todo };
    });
    setTodoList(mapped);
  };

  //Delete todo item
  const handleFilter = () => {
    let filtered = todoList.filter((todo) => {
      return todo.isCompleted !== true;
    });
    setTodoList(filtered);
  };

  //Add todo item
  const addTodo = (todo) => {
    let copy = [...todoList];

    copy = [
      ...copy,
      { id: todoList.length + 1, input: todo, isCompleted: false },
    ];

    setTodoList(copy);
  };

  return (
    <div className="container">
      <div className="app">
        <Form addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          toggle={handleToggle}
          filter={handleFilter}
        />
        <button className="clear_btn" onClick={handleFilter}>
          Clear Todo
        </button>
      </div>
    </div>
  );
};

export default App;
