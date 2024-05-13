import ReactDOM from 'react-dom/client';
import React from 'react';
import ToDo from './ToDo/Todo';
import ToDoItem from './ToDo/ToDoItem';


const App = () => {
    return ( 
        <div >
        <ToDo />
        <ToDoItem />
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App/> );