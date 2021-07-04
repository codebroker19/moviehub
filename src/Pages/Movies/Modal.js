import React from "react";
import ReactDom from "react-dom";
const modalstyle={
    position: "fixed",
    top:"50%",
    left:"50%",
    transform:"translate(-50%,-50%)",
    padding:"50px",
    zIndex:"1000",
}
const overlay={
position:"fixed",
top:"0",
left:"0",
right:"0",
bottom:"0",
backgroundColor:"rgba(0,0,0,0.6)",
color:"#fff"
}
const buttonstyle={

}
export default function Modal({open, children,close}) {
    if(!open) return null

    return ReactDom.createPortal(
        <>
        
        <div style={overlay}>
        <div style={modalstyle}>
        <div style={buttonstyle}>
            {children}<button onClick={close}>Close</button>
           
            </div>
            
        </div>
        </div>
        </>,
        document.getElementById("portal")
    )
}
