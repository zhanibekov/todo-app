import React from "react";
import '../style/AppHeader.css'
const AppHeader = ({ toDo, Done }) => {
    return ( <
        div className = "app-header d-flex" >
        <
        h1 > Todo List < /h1> <
        h2 > { toDo }
        more to do, { Done } < /h2> <
        /div>
    );
}
export default AppHeader;