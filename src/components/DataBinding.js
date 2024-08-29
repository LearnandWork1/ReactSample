import React from 'react';

const DataBinding = () => {

    const tutorialName = "ReactJs";
    const RollNo = 121;
    const isActive = false;
    const currentDate = new Date();

    const student = {
        name: 'AAA',
        city: 'Hyd'
    };

    const cityList = ['Hyd', 'Blr'];



    return (
        <div>
            <p>DataBinding</p>
            <h4>Data Test</h4>
            <table>
                <tr><td>tutorialName : {tutorialName}</td></tr>
                <tr><td>RollNo: {RollNo}</td></tr>
                <tr><td>CurrentDate : {currentDate.toString()}</td></tr>
                <tr><td>Student Name: {student.name}, city :    {student.city}</td></tr>
                <input type='TextBox' value={tutorialName}></input>            </table>
        </div>
    );
};

export default DataBinding;