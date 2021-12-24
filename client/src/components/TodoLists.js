import React from "react";
import { deleteTodo } from "../api";

const TodoLists = ({ todos, setCurrentId }) => {
  return (
    <ul className="collection with-header">
      {todos.map((todo) => (
        <li className="collection-item" key={todo._id}>
          <div>
            <h5>{todo.title}</h5>
            {todo.content}
            <div className="secondary-content">
              <i
                className="material-icons"
                onClick={() => {
                  setCurrentId(todo._id);
                }}
              >
                open_in_browser
              </i>
              <i
                className="material-icons"
                onClick={() => deleteTodo(todo._id)}
              >
                delete
              </i>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
