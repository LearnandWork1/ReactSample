import React, { useState } from 'react';

const ConditionRender = () => {

    const [isDivisible, SetDiv] = useState(false);
    const isActive = Boolean;
    const showDiv1 = () => {
        SetDiv(true);
    }
    const changeDiv1 = () => {
        SetDiv(false);
    }
    const [isDivisible2, SetDiv2] = useState(false);
    const ShowHideDiv2 = () => {
        SetDiv2(!isDivisible2);
    }
    const [isDivisible3, SetDiv3] = useState(true);
    const SelectState = (event) => {
        SetDiv3(event.target.value)
    }

    const [ischecked3, SetDiv4] = useState(true);
    const CheckBoxChange = (event) => {
        SetDiv4(event.target.value)
        // isActive = true;
    }

    const [divcolor, SetDiv1] = useState("");
    const addDiv1Color = (color) => {
        SetDiv1(color);
    }

    return (
        <div>
            <div style={{ 'background-color': divcolor, 'color': 'white' }} >TEST TEST</div>
            <button onClick={() => addDiv1Color('blue')}>AddBlued</button>
            <button onClick={() => addDiv1Color('green')}>AddGreen</button>
            <button onClick={() => addDiv1Color('yellow')}>Addyellown</button>
            
            <div className="mt-2 p-2 bg-secondary text-white rounded"> <h1>Conditional Rendering</h1>
            </div>
            <div className="row pt-3">
                <div className="col-3">
                    {
                        isDivisible &&
                        <div className="bg-danger p-3 text-center" > <h4>Div-DIV   1 </h4>
                        </div>
                    }

                </div>
                <div className="col-3">
                    {
                        isDivisible2 &&
                        <div className="bg-info p-3 text-center"> <h4>Div-2 </h4>
                        </div>
                    }

                </div>
                <div className="col-3">
                    {
                        isActive &&
                        <div className="bg-danger p-3 text-center"> <h4>Div-3 </h4>
                        </div>
                    }
                </div>
                <div className="col-3">
                    {
                        isActive &&
                        <div className="bg-info p-3 text-center"> <h4>Div-4 </h4>
                        </div>
                    }
                </div>
                <div className="col-3"> ...
                </div>
                <div className="col-3">...</div>
            </div>
            <div className="row pt-3">
                <div className="col-3 text-center">
                    <button className="btn btn-danger" onClick={changeDiv1}>Hide</button>
                    <button className="btn btn-primary mx-2" onClick={showDiv1}>Show</button> </div>
                <div className="col-3 text-center">
                    <button className="btn btn-success" onClick={ShowHideDiv2}>SHOW HIDE</button>
                    <input type="checkbox" onClick={(event) => CheckBoxChange(event)}></input>
                </div>
                <div className="col-3">
                    <div className="inline-text">
                        <input type="text" placeholder="Num-1" className="width-50" />
                        <input type="text" placeholder="Num-2" className="width-50" />
                    </div>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-3">
                    <div className="inline-text">
                        <input type="text" placeholder="Num-1" className="width-50" />
                        <input type="text" placeholder="Num-2" className="width-50" />
                    </div>
                </div>
            </div>
            <div>
                <select>
                    <option>USA</option>
                    <option>India</option>
                </select>
            </div>
        </div>
    );
};

export default ConditionRender;