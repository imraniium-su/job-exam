import React from 'react';

const Userapidata = ({ user }) => {
    const { name, email, address, phone, website } = user;
    return (
        <div className='div2'>
            <p>Name: {name}</p>
            <p>Email : {email}</p>
            <p>Address street : {address.street}</p>
            <p>Address city : {address.city}</p>
            <p>Phone : {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default Userapidata;