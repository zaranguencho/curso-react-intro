import React from 'react'
import './TodoSearch.css'


function TodoSearch({
    searchValue,
    setSearchValue
}) {

    return (
<input placeholder="Cortar cebolla" className="TodoSearch" value={searchValue} onChange={(Event) =>{setSearchValue(Event.target.value)} }/>
    )
}

export {TodoSearch}