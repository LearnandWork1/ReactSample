import React, { useState } from 'react';

const UseState = () => {

    let corsname = 'react';
    const [courseduration, setCourseName] = useState("2 months");
    const [RollNo, SetRollNo] = useState(123);
    const [isActive, SetActive] = useState(false);
    const [State, SetState] = useState('MH');
    const [check, SetcheckStatus] = useState('checked');
    const [student, SetStudent] = useState({ name: 'ss', age: '123', city: 'pune' });

    const ChangeCheck =(event) =>{
        debugger
        SetcheckStatus(event.target.checked)
    }
    const chnagename = () => {
        debugger;
        corsname = 'updated react'
    }
    const changeduration = () => {
        setCourseName("Angular");
    }

    const changeRollNo = (event) => {
        SetRollNo(event.target.value);
    }
    const chnageState = (event) => {
        
        SetState(event.target.value);
    }
    

    return (
        <div className='row'>
            <div className='col-3'>
                <p>{courseduration}</p>

                <p>{RollNo}</p>
                <p>{State}</p>
            </div>
            <div className='col-3'>
                <button className='btn-btn-primary' onClick={chnagename}>Change Course NAME</button>
            </div>
            <div className='col-3'>
                <button className='btn-btn-primary' onClick={changeduration}>Change Course duration</button>
            </div>
            <div className='col-3'>
                <input type='text' onChange={(event) => changeRollNo(event)}></input>
            </div>
            <div className='col-3'>
                <select onChange={(event) => chnageState(event)}>
                    <option>GOA</option>
                    <option>Ma</option>
                </select>
            </div>
            <input type='checkbox' onChange={(event) => ChangeCheck(event)}></input>
        </div>
    );

};

export default UseState;