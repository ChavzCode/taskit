import React, { useState, useEffect } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

//Data
import data from "./data/data.js";

//Helpers

//App
function App() {
  //State Control
  const [todos, setTodos] = useState(data);
  const [searchValue, setSearchValue] = useState(" ");

  //Variables
  const completed = todos.filter((todo) => {
    return todo.completed == true;
  });
  let searchedTodos;

  //Functions
  function updateTasks(tasks) {
    setTodos(tasks);
  }
  function completeTodo(taskToUpdate) {
    let index = todos.findIndex((task) => task.id == taskToUpdate);
    let newTasks = [...todos];
    newTasks[index].completed = true;
    return newTasks;
  }

  //App Control
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((t) => {
      const search = searchValue.toLowerCase().trim();
      const todoText = t.taskName.toLowerCase().trim();
      return todoText.includes(search);
    });
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completed.length} total={todos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchedTodos.length > 0 ? (
        <TodoList tasks={searchedTodos} completeTodo={completeTodo} updateTasks={updateTasks}/>
      ) : (
        <p>No tasks added</p>
      )}
      <TodoAdd />
    </React.Fragment>
  );
}

export default App;
