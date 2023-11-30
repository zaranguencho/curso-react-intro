import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
                V
            </span>
            <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : ""}`}>
                {props.text}
            </p>
            <span onClick={props.onDelete} className={`Icon Icon-delete`}>
                X
            </span>
        </li>
    )
}

export {TodoItem}