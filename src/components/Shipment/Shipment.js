import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, phone, address};
        console.log(shipping);
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleNameBlur} type="text" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddressBlur} type="text" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <input onBlur={handlePhoneBlur} type="number" required />
                        </div>
                        <input className='form-submit' type="submit" value="Add Shipping" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;