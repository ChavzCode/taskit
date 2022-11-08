import React, { useState, useEffect } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TodoLoading from "./components/TodoLoading";

//Data
//import data from "./data/data.js";

//Helpers

//Custom Hooks
function useLocalStorage(dataset, initialValue) {
  //Local Storage - Data
  const [todos, setTodos] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Simulate Loading time
  useEffect(() => {
    setTimeout(() => {
      try {
        let localData = localStorage.getItem(dataset);
        let parsedData;

        if (localData) {
          parsedData = JSON.parse(localData);
        } else {
          localStorage.setItem("data", JSON.stringify(initialValue));
          parsedData = [];
        }

        setTodos(parsedData);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    }, 1000);
  });

  return { todos, setTodos, loading, error };
}

//App
function App() {
  //State Control
  const { todos, setTodos, loading, error } = useLocalStorage("data", []);
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
    localStorage.setItem("data", JSON.stringify(tasks));
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

      {/* Conditional Rendering */}
      {loading && <TodoLoading />}

      {loading && error && (
        <div className="list-ctn error">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <React.Fragment>
          {searchedTodos.length > 0 && !loading ? (
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
        </React.Fragment>
      )}

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
