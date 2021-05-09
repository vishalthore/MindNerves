import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { todoActions } from "../store";

function CompleteList() {

    const dispatch = useDispatch();  

    const completed = useSelector(state => state.completed);

    const [isGoing, setIsGoing] = useState(false);

    const [listItem, setListItem] = useState('')

    // console.log(todos);

    const changeHandler = (todo) => {

        dispatch(todoActions.removeCompleted(todo));
        dispatch(todoActions.addTodo({todo:todo}));
    }

    const editHandler = (todo) => {
         setListItem(todo);
         dispatch(todoActions.removeCompleted(todo));
    }
    const inputChangeHandler = (e) => {
        
        setListItem(e.target.value);
        
    }
    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(todoActions.addCompleted({todo:listItem}));
        
        setListItem('')
    }
    const removeHandler = (todo) => {
        dispatch(todoActions.removeCompleted(todo));
    }

    return (
        <div style={{margin:'2rem auto', maxWidth:'500px'}}>
            <h1>completed todo list</h1>
            {completed.map((item, i ) => {
                return (
                <p key={i}>
                <input type='checkbox' checked={!isGoing} onChange={() => changeHandler(item.todo)}/>
                {!listItem && item.todo}
                {listItem && <form onSubmit={submitHandler}><input type='text' value={listItem} onChange={inputChangeHandler} /></form>}<br></br>
                <span onClick={() => editHandler(item.todo)} style={{padding:'0px 5px', backgroundColor:'#003157', color:'white',cursor:'pointer', margin:'5px'}}>Edit</span>
                <span onClick={() => removeHandler(item.todo)} style={{padding:'0px 5px', backgroundColor:'#003157', color:'white',cursor:'pointer', margin:'5px'}}>Delete</span>
                </p>)
                
                })}
            
        </div>
    )
}

export default CompleteList;