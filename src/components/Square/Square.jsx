import React from 'react';
import './Square.css';


const Square =({value, onClick})=>{

    return(
        <button onClick={onClick} className="square">{value}</button>
    )
    
}

export default Square ;