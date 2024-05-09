import ReactDOM from 'react-dom/client';
import React from 'react';
const LoginBox = () => {
    return <span className = "login" > LoginBox < /span>
}

const App = () => {
    return ( <
        div >
        Header <
        LoginBox / >
        <
        /div>

    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App / > );