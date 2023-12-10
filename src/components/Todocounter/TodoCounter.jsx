import './TodoCounter.css'


function TodoCounter({ show,total, completed }) {
const areAllTodosCompleted = completed === total

    return (
        <div className='TodoCounter'>
            <h1>
                Has completado {completed} de {total} ToDo's
            </h1>
            {areAllTodosCompleted && (
        <span className="Congrats">¡Felicidades!</span>
    )}
        </div>
    )
}


export { TodoCounter }
