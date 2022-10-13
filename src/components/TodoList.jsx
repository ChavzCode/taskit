import TodoItem from "./TodoItem.jsx";

function TodoList({ tasks, completeTodo, updateTasks, deleteTask }) {
  return (
    <div className="list-ctn">
      <div className="todo-list">
        {tasks.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              task={todo}
              completeTodo={completeTodo}
              updateTasks={updateTasks}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
