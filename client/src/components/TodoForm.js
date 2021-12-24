import React, { useEffect, useState } from "react";
import { createTodo, updateTodo } from "../api";

const TodoForm = ({ currentId, todos, setCurrentId }) => {
  const [todo, setTodo] = useState({ title: "", content: "" });

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (currentId !== 0) {
      await updateTodo(currentId, todo);
    } else {
      await createTodo(todo);
    }
    setCurrentId(0);
    setTodo({ title: "", content: "" });
  };

  useEffect(() => {
    if (currentId !== 0) {
      const currentTodo = todos.find((todo) => todo._id === currentId);
      setTodo(currentTodo);
    }
  }, [currentId]);

  return (
    <div className="row">
      <pre>{JSON.stringify(todo)}</pre>
      <form className="col s12" onSubmit={formSubmitHandler}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="todoTitle"
              type="text"
              className="validate"
              value={todo.title}
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <label htmlFor="todoTitle">Todo Title</label>
          </div>

          <div className="input-field col s6">
            <input
              id="description"
              type="text"
              className="materialize-textarea"
              value={todo.content}
              onChange={(e) => setTodo({ ...todo, content: e.target.value })}
            />
            <label htmlFor="description">Description</label>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
