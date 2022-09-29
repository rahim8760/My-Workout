import './Workout.css';
import React from 'react';

const Workout = ({workout, addToCartList}) => {
    
    //destructing object
    const{name,details, time, img }=workout;
    return (
        <div className='workout'>
                <img src={img} alt=""    ></img>
                <div className="">
                    <h2>{name}</h2>
                    <h3>{details}</h3>
                    <p>Time: {time} min</p>
                    {/* add event hendelar */}
                    <button onClick={() => addToCartList(workout)}>Add To List</button>
                </div>
        </div>
    );
};

export default Workout;