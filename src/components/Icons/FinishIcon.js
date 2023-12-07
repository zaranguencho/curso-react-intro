import React from "react";
import { FaCheck } from "react-icons/fa";

const FinishIcon = ({className, onClick ,completed}) => {
    return(
    <FaCheck 
    className={className}
    onClick={onClick}
    color={completed ? 'green' : 'gray'}
    />
    )
}

export { FinishIcon }