import TodoLists from "./components/TodoLists";
import { readTodos } from "./api";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Preloader from "./components/Preloader";
import NoToDo from "./components/NoToDo";

function App() {
  const [todos, setTodos] = useState(null);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    fetchData();
  }, [todos]);

  const fetchData = async () => {
    const result = await readTodos();
    setTodos(result);
  };

  return (
    <div className="container">
      <h1>Todo Project using MERN</h1>
      <h3>(MongoDB, Express, React, Node)</h3>
      <TodoForm
        currentId={currentId}
        todos={todos}
        setCurrentId={setCurrentId}
      />
      {!todos ? (
        <Preloader />
      ) : todos.length > 0 ? (
        <TodoLists todos={todos} setCurrentId={setCurrentId} />
      ) : (
        <NoToDo />
      )}
    </div>
  );
}

export default App;
