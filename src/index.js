import ReactDOM from 'react-dom/client';
import React from 'react';
<<<<<<< Updated upstream
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const TodoData = [
    { label: 'How to create react app?', important: false },
    { label: 'I bought Apple Watch', important: true },
    { label: 'I broken my Apple Watch', important: true },
]

const App = () => {
    return ( <
        div >
        <
        AppHeader / >
        <
        SearchPanel / >
        <
        TodoList Todos = { TodoData }
        /> <
        /div>

    )
}
=======
>>>>>>> Stashed changes

import App from './components/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );