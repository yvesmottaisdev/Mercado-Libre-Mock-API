import React, { useEffect, useState } from 'react';
import Button from './Button'
import '../index.css'

const Item = (props) => {

    const {thumbnail, title, description, price, stock} = props;
    const [isAvailable, setAvailable] = useState(true);

    useEffect(() => {
        if(stock <= 0) 
        {
            setAvailable(false);
        }
    }, []);
    
    return(
        <div className='item_holder'>
            <div className='main-content'>
                <div className='item_image_holder'>
                    <img className='item_image' src={thumbnail} alt={title}/>
                </div>
                <div className='item_text_holder'>
                    <div className='item_text_inner_holder'>
                        <p className='item_review'></p>
                        <p className='item_name'>{title}</p>
                        <p className='item_description'>{description}</p>
                        <p className='item_price'><span className='symbol'>£</span>{price} <span className={isAvailable ? 'available-stock' : 'notavailable-stock'}>{isAvailable ? 'In stock (' + stock + ')' : 'Not available' }</span></p>
                    </div>
                </div>
            </div>
            <Button total_quantity={stock} price={price} />
        </div>
    );

} 
 
export default Item;