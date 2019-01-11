import React from 'react';
import Character from './Character'

const CharacterList = props =>{
    return(
        <div>
            {props.starwarsChars.map((char) =>{
                return <Character key={char.created} planet={props.starwarsPlanets} character={char} />
            })}
        </div>
    )

}

export default CharacterList;

// "2014-12-09T13:50:51.644000Z"
//"2014-12-10T15:10:51.357000Z"