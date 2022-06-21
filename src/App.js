import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTasks = (value) => {
    if (value) {
      const newItem = {
        id: Date.now(),
        title: value,
        isCompleted: false,
      };
      setTodos([...todos, newItem]);
    } else {
      alert("Write your task!");
    }
  };

  const removeTasks = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  return (
    <div className="h-96 mx-auto w-11/12 justify-center items-center flex flex-col">
      <h1 className="text-4xl text-white my-4">
        Tasks for today: {todos.length}
      </h1>
      <TodoForm addTasks={addTasks} />
      <TodoList todos={todos} removeTasks={removeTasks} />
    </div>
  );
}

export default App;
