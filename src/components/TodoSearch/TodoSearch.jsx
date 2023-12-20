import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext'


function TodoSearch() {
    const {searchValue, setSearchValue
    } = React.useContext(TodoContext)

    return (
<input placeholder="Cortar cebolla" className="TodoSearch" value={searchValue} onChange={(Event) =>{setSearchValue(Event.target.value)} }/>
    )
}

export {TodoSearch}