import { useState } from "react";

function TodoAdd({ setAddTask, updateTasks, addTodo }) {
  const [taskInput, setTaskInput] = useState("");
  return (
    <div className="addTask-ctn">
      <div className="addTask">
        <h2>Add a new Todo</h2>
        <textarea
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
          name="taskInput"
          id="task"
          placeholder="Here is where you input your task"
        ></textarea>
        <div className="addTask-btns">
          <button
            className="close"
            onClick={() => {
              setAddTask(false);
            }}
          >
            Cancel
          </button>
          <button
            className="add-btn"
            onClick={() => {
              updateTasks(addTodo(taskInput));
              setAddTask(false);
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoAdd;
