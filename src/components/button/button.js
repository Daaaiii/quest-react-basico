import React from "react";
import "./button.css";

const apertaAqui =()=>{
    alert ('A label desse botão é aperta gostoso aqui')
}


const Button = (props) => {
    return ( 
    <button className='btn'onClick={apertaAqui}>{props.label}</button>
)}

export default Button