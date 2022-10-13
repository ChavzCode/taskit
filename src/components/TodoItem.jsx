function TodoItem({ task, completeTodo, updateTasks, deleteTask }) {
  return (
    <div id={task.id} className={"task-ctn"}>
      <button
        onClick={() => {
          updateTasks(completeTodo(task.id));
        }}
      >
        yes
      </button>
      <p>{task.taskName}</p>
      <button onClick={() => {
        updateTasks(deleteTask(task.id))
      }}>X</button>
    </div>
  );
}

export default TodoItem;
