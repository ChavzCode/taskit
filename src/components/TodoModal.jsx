import React from 'react';
import ReactDOM from 'react-dom'

function TodoModal({children}){
    return ReactDOM.createPortal(
        children,
        document.getElementById('modal-root')
    );
}

export default TodoModal;