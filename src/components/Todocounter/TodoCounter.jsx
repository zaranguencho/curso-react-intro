import './TodoCounter.css'


function TodoCounter({total, completed }) {

    return (
        <div className='TodoCounter'>
            <h1>
                Has completado {completed} de {total} ToDo's
            </h1>
        </div>
    )
}


export { TodoCounter }
