import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/todos" replace /> : <Login onLogin={setUser} />
          }
        />
        <Route
          path="/todos"
          element={
            user ? (
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Welcome, {user}</h1>
                <input
                  placeholder="Add new todo"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>

                <TodoList todos={todos} deleteTodo={deleteTodo} />
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
