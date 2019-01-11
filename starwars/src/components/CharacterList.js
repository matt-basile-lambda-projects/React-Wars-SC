import React, { Component } from 'react';
import Character from './Character'

const CharacterList = props =>{
    return(
        <div>
            {props.starwarsChars.map((char) =>{
                return <Character character={char} />
            })}
        </div>
    )

}

export default CharacterList;