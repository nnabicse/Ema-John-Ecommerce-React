import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        if(product.quantity<1){
            total = total + product.price
        }
        else{
            total = total + product.price*product.quantity
        }
        shipping = shipping + product.shipping;
        
    }
    const tax = total*10/100;
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summar</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;