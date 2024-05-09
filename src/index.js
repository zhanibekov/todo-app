import ReactDOM from 'react-dom/client';
import React from 'react';
import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App = () => {
    return ( <
        div >
        <
        AppHeader / >
        <
        SearchPanel / >
        <
        TodoList / >
        <
        /div>

    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );