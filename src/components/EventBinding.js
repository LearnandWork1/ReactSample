
import React from 'react';

const EventBinding = () => {
    const ShowAlert = () => {
        alert('Welcome')
    }
    const ShowMessage = (msg) => {
        alert(msg)
    }
    const onCityChange=() => {
        alert('CityChanged')
    }
    const onTextChange=() => {
        alert('Text Changed')  
      }

      const onNameChange=(event)=>{
        debugger
      //  alert('Text Changed NEW')  
      console.log(event.target.value);

      }
    return (
        <div>
            <button onClick={ShowAlert} >Show Alert</button>
            <button onClick={() => ShowMessage('Btn1')} >Show ShowMessage1</button>
            <button onClick={() => ShowMessage('Btn2')} >Show ShowMessage2</button>
<select onChange={onCityChange}>
    <option>Hyd </option>
    <option>BLR </option>
</select>
<input type='text' onChange={onTextChange}></input>
<input type='text' onChange={(event) =>{onNameChange(event)}}></input>
        </div>
    );
};

export default EventBinding;