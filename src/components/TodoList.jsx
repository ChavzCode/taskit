import TodoItem from "./TodoItem.jsx";

function TodoList({ tasks, completeTodo, updateTasks}) {


  //Sort and display task by completed
  return (
    <div className="list-ctn">
      <div className="todo-list">
        {tasks.map((todo) => {
          return (
            <TodoItem key={todo.id} task={todo} completeTodo={completeTodo} updateTasks={updateTasks}/>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
