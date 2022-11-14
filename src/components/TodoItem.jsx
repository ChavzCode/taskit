import React from "react";
import { TodoContext } from "../context/TodoContext";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function TodoItem({ task }) {
  const { completeTodo, saveTodos, deleteTask } = React.useContext(TodoContext);

  return (
    <div
      id={task.id}
      className={task.completed ? "task-ctn completed-todo" : "task-ctn"}
    >
      <button
        className="item-btn completed-btn"
        onClick={() => {
          saveTodos(completeTodo(task.id));
        }}
      >
        <AiOutlineCheck />
      </button>
      <p className="task-description">{task.taskName}</p>
      <button
        className="item-btn close-btn"
        onClick={() => {
          saveTodos(deleteTask(task.id));
        }}
      >
        {" "}
        <AiOutlineClose />{" "}
      </button>
    </div>
  );
}

export default TodoItem;
