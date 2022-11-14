import React from "react";

const TodoContext = React.createContext();

function TodoProvider(props) {

    return(
        <TodoContext.Provider value="" >
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};