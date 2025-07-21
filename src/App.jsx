import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    if (text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  }

  return (
    <div>
      <Header onAdd={addTask} />
      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
