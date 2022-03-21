import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {img, name, seller, price, ratings} = props.product
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>$ {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='button-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Product;