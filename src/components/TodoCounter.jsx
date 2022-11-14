import React from "react";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  const { searchedTodos } = React.useContext(TodoContext);
  const completed = searchedTodos.filter((todo) => {
    return todo.completed == true;
  });

  const total = searchedTodos.length;

  return (
    <div className="ctn-counter">
      <h2>
        You have completed {completed.length} of {total} tasks!
      </h2>
    </div>
  );
}
export default TodoCounter;
