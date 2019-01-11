import React from 'react';


const Character = props =>{
    return(
        <ul>
            <li> Name: {props.character.name} </li>
            <li> Gender: {props.character.gender === "male" ? "M" : props.character.gender === "n/a" ? "Robot" : "F" }</li>
            <li> Weight: {props.character.mass} kg</li>
       </ul>
    )

}

export default Character;