import React from "react";
import '../style/ItemForm.css'
import './App.js'
const ItemForm = (props) => {
    return ( <
        div className = "ItemForm" >
        <
        button className = "btn btn-outline-secondary"
        onClick = {
            () => props.onAddItem('CoCo') } >
        Add item <
        /button> <
        /div>
    );
}
export default ItemForm;