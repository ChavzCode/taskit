import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function TodoItem({ task, completeTodo, updateTasks, deleteTask }) {
  return (
    <div id={task.id} className={ task.completed ? 'task-ctn completed-todo' : "task-ctn" }>
      <button
        className="item-btn completed-btn"
        onClick={() => {
          updateTasks(completeTodo(task.id));
        }}
      >
        <AiOutlineCheck />
      </button>
      <p className="task-description">{task.taskName}</p>
      <button
        className="item-btn close-btn"
        onClick={() => {
          updateTasks(deleteTask(task.id));
        }}
      >
        {" "}
        <AiOutlineClose />{" "}
      </button>
    </div>
  );
}

export default TodoItem;
