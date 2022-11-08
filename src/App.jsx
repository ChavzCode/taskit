import React, { useState, useEffect } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

//Data
//import data from "./data/data.js";

//Helpers

//App
function App() {
  //Local Storage - Data
  let localData = localStorage.getItem('data');
  let parsedData;
  
  if(localData){
    parsedData = JSON.parse(localData)
  }else{
    localStorage.setItem('data', JSON.stringify([]));
    parsedData = [];
  }
  
  //State Control
  const [todos, setTodos] = useState(parsedData);
  const [searchValue, setSearchValue] = useState(" ");
  const [addTask, setAddTask] = useState(false);

  //Variables
  const completed = todos.filter((todo) => {
    return todo.completed == true;
  });
  let searchedTodos;

  //Functions
  function updateTasks(tasks) {
    setTodos(tasks);
    localStorage.setItem('data', JSON.stringify(tasks));
  }
  function completeTodo(taskToUpdate) {
    let index = todos.findIndex((task) => task.id == taskToUpdate);
    let newTasks = [...todos];
    newTasks[index].completed = true;
    return newTasks;
  }
  function deleteTask(taskToDelete) {
    let index = todos.findIndex((task) => task.id == taskToDelete);
    let newTasks = [...todos];
    newTasks.splice(index, 1);
    return newTasks;
  }
  function addTodo(taskInput) {
    const newTodo = {
      id: todos.length + 1,
      taskName: taskInput,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    return newTodos;
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
        <TodoList
          tasks={searchedTodos}
          completeTodo={completeTodo}
          updateTasks={updateTasks}
          deleteTask={deleteTask}
        />
      ) : (
        <div className="list-ctn">
          <p>No tasks added</p>
        </div>
      )}
      <button
        className="addTodo"
        onClick={() => {
          setAddTask(true);
        }}
      >
        +
      </button>
      {addTask ? (
        <TodoAdd
          setAddTask={setAddTask}
          updateTasks={updateTasks}
          addTodo={addTodo}
        />
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  );
}

export default App;
