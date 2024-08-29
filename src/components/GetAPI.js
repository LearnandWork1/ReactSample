import axios from 'axios';
import React, { useState } from 'react';

const GetAPI = () => {
    const [userList, setUserList] = useState([]);

    const getUsers = async () => {
        const apiresponse = await axios.get("https://jsonplaceholder.typicode.com/users");
        debugger;
        setUserList(apiresponse.data);
    }
    const [deptList, setDeptList] = useState([]);

    const getDepts = async () => {
        const apiDeptresponse = await axios.get("https://localhost:7053/api/Depts/GetAllDepts");
        debugger;
        setDeptList(apiDeptresponse.data);
    }
    return (
        <div>
            <button className='btn btn-success' onClick={getUsers}>Get Users</button>
            <button className='btn btn-success' onClick={getDepts}>Get Depts</button>
            <div className='col-4'>
                <ul>
                    {
                        userList.map((item) => {
                            return (<li>{item.name}  : {item.email}</li>)
                        })
                    }
                </ul>
            </div>

           
            <div className='col-4'>
                {/* <ul>
                    {
                        deptList.map((item) => {
                            return (<li>{item.deptName}  : {item.location}</li>)
                        })
                    }
                </ul> */}
            </div>
        </div>
    );
};

export default GetAPI;