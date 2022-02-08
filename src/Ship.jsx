import React from 'react';

import PropTypes from 'prop-types';

import './css/Ship.css';

//            

function Ship({course, speed, setCourse, setSpeed}) {
    return (
        <div className='ship'>
            <span>COURSE: {course}</span>
            <span>SPEED: {speed}</span>

            <div className="ship__control-panel">

                <div className="ship__compass-container">
                    <img className="ship__compass-img" src="./design-elements/compass.png" alt="Compass" />
                    <img className="ship__compass-N" src="./design-elements/letter-N.png" alt="N" onClick={() => setCourse("north")}/>
                    <img className="ship__compass-S" src="./design-elements/letter-S.png" alt="S" onClick={() => setCourse("south")}/>
                    <img className="ship__compass-W" src="./design-elements/letter-W.png" alt="W" onClick={() => setCourse("west")}/>
                    <img className="ship__compass-E" src="./design-elements/letter-E.png" alt="E" onClick={() => setCourse("east")}/>
                </div>

                <div className="ship__engine-controls">
                    <div className="ship__eng-controls-title-container">
                        <span className="medium-title">Engine controls:</span>
                    </div>
                    <button className="ship__control-btn" onClick={() => setSpeed(20)}>Full speed</button>
                    <button className="ship__control-btn" onClick={() => setSpeed(11)}>Ahead medium</button>                    
                    <button className="ship__control-btn" onClick={() => setSpeed(5)}>Ahead slow</button>
                    <button className="ship__control-btn" onClick={() => setSpeed(0)}>Stopping</button>
                    <button className="ship__control-btn" onClick={() => setSpeed(-4)}>Slow reverse</button>
                    <button className="ship__control-btn" onClick={() => setSpeed(-9)}>Medium reverse</button>
                    <button className="ship__control-btn" onClick={() => setSpeed(-15)}>Full reverse</button>
                </div>
            </div>

        </div>
    );
}

Ship.propTypes = {
    course: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

export default Ship;