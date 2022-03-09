import React, { useState, useEffect, useRef } from "react";
import cancel from "../images/test2.svg";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  console.log(props.edit);

  const handleToggle = () => {
    props.setToggledTodos(1);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    handleToggle();
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleSubmitEditor = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <>
      {props.edit ? (
        <form className="todo-form" onSubmit={handleSubmitEditor}>
          {/* <header className="top2">
            <img
              src={cancel}
              alt="Avatar"
              className="cancel"
              onClick={handleToggle}
            />
            <button className="done">Done</button>
          </header> */}
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
        </form>
      ) : (
        <form className="todo-form" onSubmit={handleSubmit}>
          <header className="top2">
            <img
              src={cancel}
              alt="Avatar"
              className="cancel"
              onClick={handleToggle}
            />
            <button className="done">Done</button>
          </header>
          <input
            type="text"
            placeholder="List Title"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
        </form>
      )}
    </>
  );
}

export default TodoForm;
