import React from "react";
import TodoItem from "./TodoItem";
import '../style/TodoList.css'
const TodoList = ({ Todos }) => {
    const Elements = Todos.map((item) => {
        const { id, ...itemProps } = item;
        return ( <
            li key = { id }
            className = "list-group-item" >
            <
            TodoItem {...itemProps }
            />  <
            /li>


        )
    })
    return ( <
        ul className = "list-group todo-list" > { Elements } < /ul>
    );
}
export default TodoList;