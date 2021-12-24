import TodoLists from "./components/TodoLists";
import { readTodos } from "./api";
import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Preloader from "./components/Preloader";
import NoToDo from "./components/NoToDo";

function App() {
  const [todos, setTodos] = useState(null);
  const [todo, setTodo] = useState({ title: "", content: "" });
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    fetchData();
  }, [todos]);

  const fetchData = async () => {
    const result = await readTodos();
    setTodos(result);
  };

  useEffect(() => {
    console.log(currentId);
  }, [currentId]);

  return (
    <div className="container">
      <h1>MERN Project</h1>
      <TodoForm todo={todo} setTodo={setTodo} />
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
