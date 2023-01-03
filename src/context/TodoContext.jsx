import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

//Create Context
const TodoContext = React.createContext();

function TodoProvider(props) {
  //State Control
  const { todos, saveTodos, loading, error } = useLocalStorage("data", []);
  const [searchValue, setSearchValue] = useState("");
  const [addTask, setAddTask] = useState(false);
  //Variables
  let searchedTodos;

  //Functions
  function statusTodo(taskToUpdate) {
    let index = todos.findIndex((task) => task.id == taskToUpdate);
    let newTasks = [...todos];
    newTasks[index].completed = !newTasks[index].completed;
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

  //Todo Search Logic
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
    <TodoContext.Provider
      value={{
        todos,
        saveTodos,
        loading,
        error,
        searchValue,
        setSearchValue,
        addTask,
        setAddTask,
        statusTodo,
        deleteTask,
        addTodo,
        searchedTodos,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
