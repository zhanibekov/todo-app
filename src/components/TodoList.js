import React from "react";
import TodoItem from "./TodoItem";
<<<<<<< Updated upstream
const TodoList = ({ Todos }) => {
=======
import '../style/TodoList.css'
const TodoList = ({ Todos, isDeleted }) => {
>>>>>>> Stashed changes
    const Elements = Todos.map((item) => {
        return ( <
<<<<<<< Updated upstream
            li >
            <
            TodoItem {...item }
            /> <
            /li>
        )
=======
                li key = { id }
                className = "list-group-item" >
                <
                TodoItem {...itemProps }
                isDeleted = {
                    () => isDeleted(id) }
                />  <
                /li>
            ) /////2.Здесь добавляю свойство isDeleted для удаление таска и передаю в App.js/////
>>>>>>> Stashed changes
    })
    return ( <
        ul > { Elements } <
        /ul>
    );
}
export default TodoList;