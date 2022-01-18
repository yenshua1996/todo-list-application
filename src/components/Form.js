import { useState } from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} value={input} />
    </form>
  );
};

export default Form;
