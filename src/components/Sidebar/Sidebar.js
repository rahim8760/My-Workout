import './Sidebar.css';
import React from 'react';

const Sidebar = (props) => {
    

    return (
        <div className='user_info'>
            <div className="">
                <div className="personal">
                    <img src="" alt="" />
                    <div className="personal_info">
                        <h2>Abdur Rahim</h2>
                        <h4>Bangledesh</h4>
                    </div>
                </div>
                <div className="physical_info exercise_time">
                    <div className="">
                        <h2>32 <small>kg</small></h2>
                        <h3>Weight</h3>
                    </div>
                    <div className="">
                        <h2>5.7 <small>in</small></h2>
                        <h3>Height</h3>
                    </div>
                    <div className="">
                        <h2>28 <small>yrs</small></h2>
                        <h3>Age</h3>
                    </div>
                </div>
            </div>
            <div className="brack">
                <h1>Add A Break</h1>
                <div className="physical_info exercise_time">
                    <button className='brack_btn'><span>3</span>min</button>
                    <button className='brack_btn'><span>5</span>min</button>
                    <button className='brack_btn'><span>8</span>min</button>
                    <button className='brack_btn'><span>10</span>min</button>
                    <button className='brack_btn'><span>15</span>min</button>
                </div>
            </div>
            <div className="exercise">
            <h1>Exercise Details</h1>
            <div className="exercise_time">
                <h3>Exercise time <small className='sort_text'><span >00</span> seconds</small> </h3>
            </div>
            <div className="exercise_time">
                <h3>Break time <small className='sort_text'><span >00</span> seconds</small> </h3>
            </div>
            </div>
            <div className="acitivety">
                <button className='acti_btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;