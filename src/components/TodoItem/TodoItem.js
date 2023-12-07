import './TodoItem.css'
import { FinishIcon } from "./../Icons/FinishIcon.js";
import { DeleteIcon } from "./../Icons/DeleteIcon.js";



const TodoItem = (props) => {


    return (
        <li className="TodoItem">

                <FinishIcon completed={props.completed}  className={`Icon Icon-svg Icon-check`} onClick={props.onComplete}/>
                <p className={`TodoItem-p ${props.completed ? "TodoItem-p--complete" : ""}`}>
                    {props.text}
                </p>
                <DeleteIcon onClick={props.onDelete} className={`Icon-svg Icon Icon-delete`}></DeleteIcon>
        </li>
    )
}

export { TodoItem }