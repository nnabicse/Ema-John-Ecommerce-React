import {faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const{product, handleRemoveProduct} = props
    const { name, price, img, shipping, quantity} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={name}>
                        {name>20 ? name:name.slice(0,25) + "..."}
                    </p>
                    <p>
                        Price: <span className='orange-color'>{price}</span>
                    </p>
                    <p>
                        <small>
                            Shipping: {shipping}
                        </small>
                    </p>

                    <p>
                        <small>Qty: {quantity}</small>
                    </p>

                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;