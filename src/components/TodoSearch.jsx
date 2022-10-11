import React, { useState } from "react";

function TodoSearch({ searchValue, setSearchValue }) {
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
