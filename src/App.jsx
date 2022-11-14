import React, { useState, useEffect, useContext } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import TodoLoading from "./components/TodoLoading";

//App
function App() {
  //Import Context
  const {loading, error, searchedTodos, addTask, setAddTask} =
    useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

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
            <TodoList />
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

      {addTask ? <TodoAdd /> : <React.Fragment />}
    </React.Fragment>
  );
}

export default App;
