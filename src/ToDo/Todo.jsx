import React, { useState } from "react";
import './index.css'
import TodoItem from "./ToDoItem";
import { useState } from "react";

const Base = [{
    _id: 1,
    name: 'Купить макбук',
    isChecked:  true,
},
{
    _id: 2,
    name: 'Apple Watch Series 9 Unboxing - ASMR',
    isChecked:  true,
},
{
    _id: 3,
    name: 'I bought Apple Watch',
    isChecked:  true,
},

]

const ToDo = () => {
    const [name, setName] = useState('');
    return (
        <>
         {Base.map(todo => (<TodoItem key={`_id_${todo._id}`} todo={todo} />))}
         <input type= "text" onChange={(e) => setName(e.target.value)} placeholder="Введите название нового таска"/>
        </>
       
    )
}

export default ToDo;