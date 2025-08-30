import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TodoItem from "./TodoItem";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambah Tugas..."
        />
        <button onClick={addTodo}>Tambah</button>
        <div style={{ marginTop: "20px" }}>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo}
              onDelete={() => deleteTodo(index)}
            ></TodoItem>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
