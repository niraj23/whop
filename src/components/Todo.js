import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";

function Todo({ todos, removeTodo, updateTodo, setToggledTodos }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleToggle = () => {
    setToggledTodos(2);
  };
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <>
          <div className="todo-row" key={todo.id}>
            <h1 className="text">{todo.text}</h1>
            <IoEllipsisHorizontal
              onClick={handleDropdown}
              className="ellipsis"
            />
          </div>
          <>
            {showDropdown ? (
              <div
                className="dropdown-menu"
                onClick={handleDropdown}
                key={todo.id}
              >
                <div
                  className="todo-edit"
                  onClick={() => {
                    setEdit({ id: todo.id, value: todo.text });
                  }}
                >
                  <BiPencil className="edit-icon" />
                  <h3 className="edit">Edit</h3>
                </div>
                <div
                  className="todo-delete"
                  onClick={() => removeTodo(todo.id)}
                >
                  <BsFillTrashFill className="delete-icon" />
                  <h3 className="edit">Delete</h3>
                </div>
              </div>
            ) : null}
          </>
        </>
      ))}
    </div>
  );
}

export default Todo;
