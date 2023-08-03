import React, { useEffect, useState } from 'react';
import Userapidata from './usersfile/Userapidata';

const Userapi = () => {
    const [users, SetUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => SetUsers(data));
    }, [])
    return (
        <div>
            <h1>Users Information</h1>
            <div className='name1'>
                {
                    users.map(user => <Userapidata user={user} key={user.id}></Userapidata>)
                }
            </div>
        </div>
    );
};

export default Userapi;