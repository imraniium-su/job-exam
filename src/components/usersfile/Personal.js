import React from 'react';
import Personatdata from './Personatdata';
import './Personal.css'
const Personal = () => {
    const users = [
        { name: "John Doe", id: 1, age: 31 },
        { name: "Jane Doe", id: 2, age: 23 },
        { name: "Billy Doe", id: 3, age: 25 }
    ];
    return (
        <div>
            <h1>Personal Data</h1>
            <div className='name1'>
                {
                    users.map(user => <Personatdata user={user} key={user.id}></Personatdata>)
                }
            </div>
        </div>
    );
};

export default Personal;