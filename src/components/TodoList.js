import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ Todos }) => {
    const Elements = Todos.map((item) => {
        return ( <
            li >
            <
            TodoItem {...item }
            /> <
            /li>
        )
    })
    return ( <
        ul > { Elements } <
        /ul>
    );
}
export default TodoList;