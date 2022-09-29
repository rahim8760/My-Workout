import './Workout.css';
import React from 'react';

const Workout = (props) => {
    const{name,details, Time, img }=props.workout;
    return (
        <div className='workout'>
                <img src={img} alt=""    ></img>
                <div className="">
                    <h2>{name}</h2>
                    <h3>{details}</h3>
                    <p>Time: {Time} min</p>
                    <button onClick={()=>props.workTimeEvent(props.workout)}>Add To List</button>
                </div>
        </div>
    );
};

export default Workout;