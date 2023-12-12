import React from 'react'
import './TodoList.css'
import { TodoItem } from '../TodoItem/TodoItem'


function TodoList({children}) {
    return (
        <ul className={`TodoList`}>
            {children}
        </ul>
    )
}


export {TodoList}