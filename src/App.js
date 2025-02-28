import React, { useState } from "react";
import "./App.css"; // Optional: Add some styling

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add Task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(""); // Clear input
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List 📝</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{item.text}</span>
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;