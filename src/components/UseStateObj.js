import React, { useState } from 'react';

const UseStateObj = () => {    
    const [studentobj, SetStudentObj] = useState({
        name: 'AAA',
        city: 'HYD'
    })
    const changeName = (event) => {        
        SetStudentObj(oldobj => ({ ...oldobj, name: event.target.value }));
    }
    const changeCity = (event) => {        
        SetStudentObj(oldobj => ({ ...oldobj, city: event.target.value }));
    }
    // const changeCity = (event) => {
    //     debugger
    //     SetStudentObj(oldobj => ({ ...oldobj, city: event.target.value }));
    // }

return (
    <div>
        <p>{JSON.stringify(studentobj)}</p>
        <div className='row'>
            <div className='col-4'>
                <label>Name</label>
                <input type='text' className='form-control' onChange={(event) => changeName(event)}></input>
                <label>City</label>
                <input type='text' className='form-control' onChange={(event) => changeCity(event)}></input>
            </div>
        </div>
    </div>
);
};

export default UseStateObj;