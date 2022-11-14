import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <div className="ctn-search">
      <input
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        value={searchValue}
        placeholder="Search a task"
      />
      <button>X</button>
    </div>
  );
}

export default TodoSearch;
