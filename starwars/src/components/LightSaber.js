import React from 'react';
import './starWars.css'


const LightSaber = () =>{
    return(
        <div className="light-saber">
            <div className="handle">
                <div className="switch"></div>
            </div>
            <div className="handle-top"></div>
            <div className="plasma">
                <div className="blade-shine"></div>
            </div>
        </div>
    )

}

export default LightSaber;