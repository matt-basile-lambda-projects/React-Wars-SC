import React from 'react';
import './starWars.css'
import LightSaber from './LightSaber'


const Character = props =>{
    return(
        <ul onMouseEnter={props.showSaber}className="char-traits">
            <h2 className="trait name"> {props.character.name} </h2>
            <li className="trait"> Gender: {props.character.gender === "male" ? "M" : props.character.gender === "n/a" ? "Robot" : "F" }</li>
            <li className="trait"> Weight: {props.character.mass} kg</li>
            <li className="trait"> Height: {Math.round(10*(props.character.height / 30.48))/10} ft</li>
            <LightSaber />
       </ul>
    )

}

export default Character;