import React from "react";
import TodoItem from "./TodoItem";
const TodoList = () => {
    return ( <
        ul >
        <
        li > < TodoItem label = "How to create react app?" / > < /li>  <
        li > < TodoItem label = "How to build react app?"
        important / > < /li>  <
        /ul>
    );
}
export default TodoList;