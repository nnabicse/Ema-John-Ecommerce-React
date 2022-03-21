import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className='shop-container'>
            <div className='prodcuts-container'>
                <h3>Products: {products.length}</h3>

            </div>
            <div className='cart-container'>
                <h4>Order Summar</h4>

            </div>
        </div>
    );
};

export default Shop;