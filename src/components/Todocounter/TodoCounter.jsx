import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext'


function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext)


    return (
        <div className='TodoCounter'>
            <h1>
                Has completado {completedTodos} de {totalTodos} ToDo's
            </h1>
        </div>
    )
}


export { TodoCounter }
