import './Data.css';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';
import Workout from '../Workout/Workout';
import Sidebar from '../Sidebar/Sidebar';


const Data = () => {
    // fetch data from jason file
    const [workouts, setWorkouts] = useState([]);
    
    useEffect(()=> {
        fetch("datas.json")
        .then(res=>res.json())
        .then( data => setWorkouts(data));
    } ,[]);
    
    
    const [time, setCart] = useState(0);
    const addToCartList = workout => {
        setCart(time + workout.time);
    };
    return (
        
    <div className="information">
        <div className='workout_section'>
            {
                workouts.map(workout=> <Workout 
                key={workout.id} 
                workout={workout} 
                addToCartList={addToCartList}>

                                            </Workout>  )
                }
            
        </div>
        <Sidebar time={time}></Sidebar>
  </div>
    );
};

export default Data;
