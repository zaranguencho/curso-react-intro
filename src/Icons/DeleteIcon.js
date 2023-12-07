import React from "react";
import { MdDeleteForever } from "react-icons/md";



const DeleteIcon = ({className, onClick}) => {
    return (
            <MdDeleteForever 
            className={className}
            onClick={onClick}
            color="gray"
            />
    )
}

export { DeleteIcon }

