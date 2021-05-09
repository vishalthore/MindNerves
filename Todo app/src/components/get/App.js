import React, { Fragment } from 'react'
import CompleteList from './UI/CompleteList'
import Form from './UI/Form'
import TodoList from './UI/TodoList'

function App() {
    return (
        <Fragment>
            <Form />
            <TodoList />
            <CompleteList />
            
        </Fragment>
    )
}

export default App
