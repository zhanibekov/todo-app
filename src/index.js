import ReactDOM from 'react-dom/client';
import React from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';
import ItemStatusFilter from './components/Item-Status-Filter';

const TodoData = [
    { label: 'How to create react app?', important: false, id: 124 },
    { label: 'I bought Apple Watch', important: true, id: 145 },
    { label: 'I broken my Apple Watch', important: true, id: 456 },
]

const App = () => {
    return ( <
        div >
        <
        AppHeader / >
        <
        ItemStatusFilter / >
        <
        SearchPanel / >
        <
        TodoList Todos = { TodoData }
        /> <
        /div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );