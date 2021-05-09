import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { todoActions } from '../store';

import './Form.css';

function Form() {

    const [enteredTodo, setEnteredTodo] = useState('');
    const [todoErr, setTodoErr] = useState(false)
    const dispatch = useDispatch();

    const todoChangeHandler = (e) => {

        setEnteredTodo(e.target.value);
                
    }
    

    const submitHandler = (e) => {

        e.preventDefault();

        if(enteredTodo.length<1){
            setTodoErr(true)
         }else{

        const item = {
            todo:enteredTodo
        }
        dispatch(todoActions.addTodo(item));   }     
    }
    
    
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='city'><h3>Enter Todo</h3></label>
                <input type='text' id='city' onChange={todoChangeHandler} value={enteredTodo} />
                {todoErr && <p style={{color:"red"}}>Must not be empty</p>}
            </div>
           
            <button>Add todo</button>
            
        </form>
    )
}

export default Form;
