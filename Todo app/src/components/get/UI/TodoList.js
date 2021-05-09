import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { todoActions } from "../store";

function TodoList() {

    const dispatch = useDispatch();  

    const todos = useSelector(state => state.todo);

    const [isGoing, setIsGoing] = useState(false);

    const [listItem, setListItem] = useState('');

    // console.log(todos);

    const changeHandler = (todo) => {

        dispatch(todoActions.removeTodo(todo));
        dispatch(todoActions.addCompleted({todo:todo}));
    }

    const editHandler = (todo) => {
        setListItem(todo);
        dispatch(todoActions.removeTodo(todo));
   }
   const inputChangeHandler = (e) => {
       
       setListItem(e.target.value);
       
   }
   const submitHandler = (e) => {
       e.preventDefault();
       
       dispatch(todoActions.addTodo({todo:listItem}));
       
       setListItem('')
   }
   const removeHandler = (todo) => {
       dispatch(todoActions.removeTodo(todo));
   }
    
    return (
        <div style={{margin:'2rem auto', maxWidth:'500px'}}>
            <h1>list of todo</h1>
            {todos.map((item, i ) => {
                return (
                <p key={i}>
                <input type='checkbox' checked={isGoing} onChange={() => changeHandler(item.todo)}/>
                {!listItem && item.todo}
                {listItem && <form onSubmit={submitHandler}><input type='text' value={listItem} onChange={inputChangeHandler} /></form>}<br></br>
                <span onClick={() => editHandler(item.todo)} style={{padding:'0px 5px', backgroundColor:'#003157', color:'white',cursor:'pointer', margin:'5px'}}>Edit</span>
                <span onClick={() => removeHandler(item.todo)} style={{padding:'0px 5px', backgroundColor:'#003157', color:'white',cursor:'pointer', margin:'5px'}}>Delete</span>

                </p>)
                
                })}
            
        </div>
    )
}

export default TodoList
