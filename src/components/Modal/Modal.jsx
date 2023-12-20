import React from "react";
import { ReactDOM } from "react";

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className="Modal">
            {children}
        </div>,
        document.getElementById('')
    )
}

export { Modal }