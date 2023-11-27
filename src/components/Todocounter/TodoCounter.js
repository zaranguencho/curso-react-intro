import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <h1>
            Has completado {completed} de {total} ToDo's
        </h1>
    )
}


export {TodoCounter}
