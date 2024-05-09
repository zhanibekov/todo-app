import React from "react";

const TodoItem = ({ label, important }) => {
    const style = {
        color: important ? 'Tomato' : 'Black'
    }
    return ( <
        span style = { style } > < li > { label } < /li> </span >
    );
}
export default TodoItem