import './TodoSearch.css'

function TodoSearch() {
    return (
<input placeholder="Cortar cebolla" className="TodoSearch" onChange={(Event) =>{ console.log('Escribiste en la consola');console.log(Event); console.log(Event.target); console.log(Event.target.value);} }/>
    )
}

export {TodoSearch}