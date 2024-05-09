import React from "react";

const TodoItem = ({ label, important }) => {
    const style = {
        color: important ? 'Tomato' : 'Black'
    }
    return ( <
        span style = { style } > { label } < /span>
    );
}
export default TodoItem