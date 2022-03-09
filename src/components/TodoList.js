import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import avatar from "../images/avatar.png";
import Test from "../images/test.svg";
import { BiPlus } from "react-icons/bi";
import cancel from "../images/test2.svg";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [toggledTodos, setToggledTodos] = useState(1);

  const handleToggle = () => {
    setToggledTodos(2);
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  return (
    <div>
      {toggledTodos === 1 ? (
        <>
          <header className="top">
            <img src={avatar} alt="Avatar" className="avatar" />
            <h1 className="list">Lists</h1>
            <img
              src={Test}
              alt="create"
              className="create"
              onClick={handleToggle}
            />
          </header>
          {todos.length === 0 ? (
            <div className="empty-row">
              <h2> Create a List </h2>
              <BiPlus onClick={handleToggle} />
            </div>
          ) : (
            <Todo
              todos={todos}
              setToggledTodos={setToggledTodos}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          )}
        </>
      ) : toggledTodos === 3 ? (
        <>
          <h1>hi</h1>
        </>
      ) : (
        <>
          {" "}
          <TodoForm onSubmit={addTodo} setToggledTodos={setToggledTodos} />
        </>
      )}
    </div>
  );
}

export default TodoList;
