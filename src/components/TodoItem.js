import React from "react";
<<<<<<< Updated upstream

const TodoItem = ({ label, important }) => {
    const style = {
        color: important ? 'Tomato' : 'Black'
    }
    return ( <
        span style = { style } > < li > { label } < /li> </span >
    );
}
export default TodoItem
=======
import '../style/TodoItem.css'

class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false,
    };
    onLabelClick = () => { /////DONE NOT DONE//////////
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }
    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })

    }


    render() {
        const { label, isDeleted } = this.props; ////Добавил переменную isDeleted//////
        const { done, important } = this.state;
        let classNames = "todo-list-item";
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return ( <
            span className = { classNames } >
            <
            span className = "todo-list-item-label"
            onClick = { this.onLabelClick } > { label } < /span>

            <
            button type = "button"
            className = "btn btn-outline-success btn-sm float-right"
            onClick = { this.onMarkImportant } >
            <
            i className = "fa fa-exclamation" > < /i> </button >

            <
            button type = "button"
            className = "btn btn-outline-danger btn-sm float-right" //////1.Здесь я добавляю свойство onClick для удаление таска и передаю в TodoList.js/////
            onClick = { isDeleted } >
            <
            i className = "fa fa-trash-o" > < /i>   <
            /button >  <
            /span>
        )
    }
}
export default TodoListItem;
>>>>>>> Stashed changes
