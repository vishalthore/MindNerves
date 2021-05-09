import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { popTableActions } from '../store';
import './Form.css';

function Form() {

    const [enteredCity, setEnteredCity] = useState('');
    const [enteredState, setEnteredState] = useState('');
    const [enteredPopulation, setEnteredPopulation] = useState('');
    const dispatch = useDispatch();

    const cityChangeHandler = (e) => {

        setEnteredCity(e.target.value);
        
    }
    const stateChangeHandler = (e) => {

        setEnteredState(e.target.value);
        
    }

    const populationChangeHandler = (e) => {

        setEnteredPopulation(e.target.value);
        
    }
    

    const submitHandler = (e) => {

        e.preventDefault();

        const item = {
            city:enteredCity,
            state:enteredState,
            population:enteredPopulation
        }
        dispatch(popTableActions.add(item));        
    }
    
    
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='city'>US city</label>
                <input type='text' id='city' onChange={cityChangeHandler} value={enteredCity} />
                {enteredCity.length>30 && <p style={{color:"red"}}>Must contain less than 30 characters</p>}
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input type='text' id='state' onChange={stateChangeHandler} value={enteredState} />
                {enteredState.length>30 && <p style={{color:"red"}}>Must contain less than 30 characters</p>}
            </div>
            <div>
                <label htmlFor='population'>Population</label>
                <input type='number' id='population' onChange={populationChangeHandler} value={enteredPopulation} />
            </div>
            <button>Add to Table</button>
            
        </form>
    )
}

export default Form;
