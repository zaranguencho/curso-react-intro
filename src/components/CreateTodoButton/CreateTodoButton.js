import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton" onClick={() => console.log('Le diste click')}> 
            +
        </button>
    )
}

export {CreateTodoButton} 