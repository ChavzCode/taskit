function TodoItem({task, completeTodo, updateTasks}) {
  return (
    <div id={task.id} className={'task-ctn'}>
      <button onClick={() => { updateTasks(completeTodo(task.id))}}>yes</button>
      <p>{task.taskName}</p>
      <button>X</button>
    </div>
  )
}

export default TodoItem