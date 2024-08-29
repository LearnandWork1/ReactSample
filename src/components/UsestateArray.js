import React, { useState } from 'react';

const UsestateArray = () => {
    const [cityList, selCityList] = useState(['pune', 'Nagpur']);
    const [cityName, setCityName] = useState("");
      
    const changeCity = (event)=>{
        setCityName(event.target.value);
    }
    const addCity = (event)=>{
        selCityList(oldcity=>[...oldcity]);
    }

    return (
        <div className='row'>
            <p>cityList</p>
            <div className='col-3'>
                <input type='text' className='form-control'></input>
            </div>
            <div className='col-3'>
                <button type='button' onClick={(event)=>addCity(event)} className='btn-btn-success'>Add</button>
            </div>
        </div>
    );

};

export default UsestateArray;