import React, { Component } from 'react';
import AppHeader from './AppHeader'
import TodoList from './TodoList'
import SearchPanel from './SearchPanel'
import ItemStatusFilter from './Item-Status-Filter';
import ItemForm from './ItemForm';

export default class App extends Component { ////1.Обернул массив состоянием state//// 
    maxId = 100; ///Генератор id////
    state = {
        TodoData: [
            { label: 'How to create react app?', important: false, id: 124 },
            { label: 'I bought Apple Watch', important: true, id: 145 },
            { label: 'I broken my Apple Watch', important: true, id: 456 },
        ]
    };

    deleteItem = (id) => { ////3.Функция удаление задания или таска ////
        this.setState(({ TodoData }) => {
                const indx = TodoData.findIndex((el) => el.id === id); ///Для того чтобы вычислить новый state нам нужна удалить из массива элемент////
                const newArray = [
                    ...TodoData.slice(0, indx),
                    ...TodoData.slice(indx + 1)
                ];
                return {
                    TodoData: newArray
                }
            }) //Здесь я буду искать index (el) точно такой же id (el) который мы получили///
    }

    AddItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
        }
        this.setState(({ TodoData }) => {
            const newArray2 = [
                ...TodoData,
                newItem
            ];
            return {
                TodoData: newArray2
            }
        })
    }

    render() {
        return ( ////2.TodoDatа теперь часть состояние state, this.state.TodoData////
            <
            div className = 'todo-app' >
            <
            AppHeader / >
            <
            ItemStatusFilter / >
            <
            SearchPanel / >
            <
            TodoList Todos = { this.state.TodoData }
            isDeleted = { this.deleteItem }
            />    <
            ItemForm onAddItem = { this.AddItem }
            /> < /
            div >
            /////Здесь я получил от TodoList  данные о удаление id/////                                            

        )
    }

}