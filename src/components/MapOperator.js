import React from 'react';

const MapOperator = () => {
    const cityArray = ["Pune", "Mumbai", "Jaipur"];
    const studentArray = [
        { name: 'aaa', city: 'pune', RollNo: 121 },
        { name: 'bbb', city: 'Mumbai', RollNo: 131 },
        { name: 'ccc', city: 'hyd', RollNo: 145 }

    ];

    return (
        <div className="row">           
           <div>
           <div className='col-3'>
                <table className='table table bordered'>
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>RollNo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentArray.map((stud, index) => {
                                return (<tr>
                                    <td>{index + 1}</td>
                                    <td>{stud.Name}</td>
                                    <td>{stud.city}</td>
                                    <td>{stud.RollNo}</td>

                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
           </div>
            <div className="col-3">
                <ul>
                    {
                        cityArray.map((city) => {
                            return (<li>{city}</li>)
                        })
                    }
                </ul>
            </div>
            <div className='col-3'>
                <select className='form-select'>
                    {
                        cityArray.map((item) => {
                            return (
                                <option>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className='col-3'>
                <select>
                    {
                        studentArray.map((student) => {
                            return (<option>{student.name}</option>)
                        })
                    }
                </select>
            </div>
        </div>
    );
};

export default MapOperator;