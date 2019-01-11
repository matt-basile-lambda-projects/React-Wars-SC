import React from 'react';


const Character = props =>{
    return(
        <ul>
            <li> Name: {props.character.name} </li>
            <li> Gender: {props.character.gender === "male" ? "M" : props.character.gender === "n/a" ? "Robot" : "F" }</li>
            <li> Weight: {props.character.mass} kg</li>
            <li> Height: {Math.round(10*(props.character.height / 30.48))/10} ft</li>
       </ul>
    )

}

export default Character;