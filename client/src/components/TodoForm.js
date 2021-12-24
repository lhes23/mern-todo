import React from "react";
import { createTodo } from "../api";

const TodoForm = ({ todo, setTodo }) => {
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    await createTodo(todo);
    setTodo({ title: "", content: "" });
  };

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
