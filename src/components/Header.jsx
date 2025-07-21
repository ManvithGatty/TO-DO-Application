import { useState } from "react";

function Header({ onAdd }) {
  const [task, setTask] = useState("");

  function handleAdd() {
      onAdd(task);
      setTask("");
  }
  
  return (
    <>
      <div className="header">
        <input
          type="text"
          id="add-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add new Task!"
        />
        <button onClick={handleAdd} id="add-btn">
          Add Task
        </button>
      </div>
    </>
  );
}

export default Header;
