import React from 'react';

const SchoolLSData = () => {
    const tutorialName = "ReactJs";
    const RollNo = 121;
    const isActive = false;
    const currentDate = new Date();

    const student = {
        name: 'AAA',
        city: 'Hyd'
    };
    const SaveData = (msg) => {
        alert(msg)
    }
    const cityList = ['Hyd', 'Blr'];

    return (
        <div id="wrapper" >
            <table>
                <tr>
                    <td >
                        CurrentDate : {currentDate.toString()}
                        <div>
                            <br></br>
                            <label>State/Region</label>
                            <input type='text' className='form-control' ></input>
                            <label>District</label>
                            <input type='text' className='form-control' ></input>
                            <label>School Type</label>
                            <input type='text' className='form-control' ></input>
                            <label>School Name</label>
                            <input type='text' className='form-control' ></input>
                            <label>PIN Code</label>
                            <input type='text' className='form-control' ></input>
                            {/* Name of the Teacher: {student.name} */}
                            <label>Name of the Teacher</label>
                            <input type='text' className='form-control' ></input>
                            <label>Contact Number</label>
                            <input type='text' className='form-control' ></input>
                            <label>Email</label>
                            <input type='text' className='form-control' ></input>
                            <label>TEST</label>
                            <input type='text' className='form-control' ></input>
                        </div>
                    </td>
                    <td>&nbsp;</td>
                    <td >
                        CurrentDate : {currentDate.toString()}
                        <div>
                            <br></br>
                            <label>Skill Type</label>
                            <input type='text' className='form-control' ></input>
                            <label>Class</label>
                            <input type='text' className='form-control' ></input>
                            <label>Number of Students</label>
                            <input type='text' className='form-control' ></input>
                            <label>Feedback/Goodness Standards</label>
                            <input type='text' className='form-control' ></input>
                           {/* Name of the Teacher: {student.name} */}
                           <label>Name of preceptor conducted Meditation Sitting</label>
                            <input type='text' className='form-control' ></input>
                            <label>HET-Coordinator Name</label>
                            <input type='text' className='form-control' ></input>
                            <label>If No. please give reason</label>
                            <input type='text' className='form-control' ></input>
                            <label>Select Mentor</label>
                            <input type='text' className='form-control' ></input>
                            <label>Comments</label>
                            <input type='text' className='form-control' ></input>
                        </div>
                    </td>
                    
                </tr>
                <tr><td> <button onClick={() => SaveData('Btn1')} >Send Data</button></td></tr>
            </table>


        </div>


    );
};

export default SchoolLSData;