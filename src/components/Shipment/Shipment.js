import React, { useState } from 'react';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
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
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input onBlur={handleEmailBlur} type="text" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleNameBlur} type="email" required />
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