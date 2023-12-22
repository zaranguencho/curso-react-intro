import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
    const { addTodo,setOpenModal } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Crea un nuevo ToDo</label>
            <textarea placeholder="Contar aviones" value={newTodoValue} onChange={onChange} />

            <div className="TodoForm-Buttons">
                <button type="button" onClick={onCancel} className="TodoForm-cancel">
                    Cancelar
                </button>
                <button type="button" onClick={onSubmit} className="TodoForm-create">
                    Crear
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
