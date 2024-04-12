import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
const Comp1=()=>{
    const [task,setTask]=useState("");
    const [todo,setTodo]=useState([]);
    const changeHandler=e=>{
        setTask(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault();
        console.log(task);
        const newtodos=[...todo,task];
        setTodo(newtodos);
        setTask("");
    }
    const deleteHandler=(indexValue)=>{
        const newtodos=todo.filter((todo,index)=>
            index!==indexValue);
            setTodo(newtodos);

        }
    
    return(
        <>
          <div>
            <center>
            <div className="card">
                <div className="card-body">
                    <h4>TODO MANAGEMENT APPLICATION</h4>
                    <form onSubmit={submitHandler}>
                        <input type="text" name="task" value={task} onChange={changeHandler} />&nbsp;
                        <input type="submit" value="Add" name="Add"/>
                    </form>
                    <TodoList todolist={todo} deleteHandler={deleteHandler}/>
                </div>
            </div>
            </center>
          </div>
        </>
    )
}

export default Comp1;