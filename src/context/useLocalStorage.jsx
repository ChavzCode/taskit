import React, { useState, useEffect } from "react";

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

  const saveTodos = (tasks) => {
    setTodos(tasks);
    localStorage.setItem("data", JSON.stringify(tasks));
  };

  return { todos, saveTodos, loading, error };
}

export default useLocalStorage;
