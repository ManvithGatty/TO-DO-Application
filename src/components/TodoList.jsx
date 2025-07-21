import TodoItem from "./TodoItem";

function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <>
      <div className="body">
        <h1>TO-DO List</h1>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
