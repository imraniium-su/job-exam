import React from 'react';

const Personatdata = ({ user }) => {
    const { name, age } = user;
    return (
        <div className='div1'>
            <p>Name: {name}</p>
            <p>Age : {age}</p>
        </div >
    );
};

export default Personatdata;