import React from "react";
import TodoItem from "./TodoItem.jsx";
import { TodoContext } from "../context/TodoContext.jsx";

function TodoList() {
  const { searchedTodos } = React.useContext(TodoContext);

  return (
    <div className="list-ctn">
      <div className="todo-list">
        {searchedTodos.map((todo) => {
          return <TodoItem key={todo.id} task={todo} />;
        })}
      </div>
    </div>
  );
}

export default TodoList;
