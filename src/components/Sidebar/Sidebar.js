import './Sidebar.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = ({time}) => {
    const [breakTime, setBreakTime] = useState([]);
    useEffect(() => {

    }, [breakTime]);
    const addLocalStorage = Time => {
        localStorage.setItem("break", Time);
        setBreakTime(Time);
    };
    const getLocalStorageItem = localStorage.getItem("break");
    
    const notify = () => toast("Wow so easy!");

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
                <div>
                    
                        <div className="physical_info">
                            <div className="brack_btn">
                                <button className="brack_btn"
                                    
                                    onClick={e => addLocalStorage(e.target.innerText)}>
                                    15
                                </button>
                            </div>
                            <div className="brack_btn">
                                <button className="brack_btn"
                                   
                                    onClick={e => addLocalStorage(e.target.innerText)}>
                                    25
                                </button>
                            </div>
                            <div className="brack_btn">
                                <button className="brack_btn"
                                    
                                    onClick={e => addLocalStorage(e.target.innerText)}>
                                    35
                                </button>
                            </div>
                            <div className="brack_btn">
                                <button className="brack_btn"
                                    
                                    onClick={e => addLocalStorage(e.target.innerText)}>
                                    45
                                </button>
                            </div>
                            <div className="brack_btn">
                                <button className="brack_btn" 
                                    
                                    onClick={e => addLocalStorage(e.target.innerText)}>
                                    60
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exercise">
            <h1>Exercise Details</h1>
            <div className="exercise_time">
                <h3>Exercise time <small className='sort_text'><span >{time}</span> mints</small> </h3>
            </div>
            <div className="exercise_time">
                <div>
                    <h1 >Break time </h1>
                    <span>{getLocalStorageItem} seconds</span>
                </div>
            </div>
            </div>
            <div className="acitivety">
                <button onClick={notify} className='acti_btn'>Activity Completed</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Sidebar;