import React from "react";
import Header from "./components/Header";
import TodoItems from './components/TodoItems';
import Button from "./components/button";

import "./style.css";

function App(){
    return(
     <div className="todo-container">
        <Header/>
        <TodoItems/>
        <TodoItems/>
        <TodoItems/>
        <TodoItems/>
        <TodoItems/>
        <Button/>
     </div>
    )
};
export default App;