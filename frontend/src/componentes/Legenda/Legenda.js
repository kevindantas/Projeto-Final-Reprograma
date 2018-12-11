import React from 'react'
import './Legenda.css'

/*
<Legenda htmlFor="email"> Email: </Legenda>
*/
function Legenda(props) {
    return (
    <label className= "legenda" htmlFor={props.htmlFor}>
         {props.children} 
    </label>
)

}

export default Legenda 
