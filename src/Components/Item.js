import React from 'react';
import '../index.css'

const Item = (props) => {

    const {item_name, image, price} = props;

    return(
        <div className='item_holder'>
            <img className='item_image' src={image} alt=''/>
            <p className='item_name'>{item_name}</p>
            <p className='item_price'>${price}</p>
        </div>
    );

} 

export default Item;