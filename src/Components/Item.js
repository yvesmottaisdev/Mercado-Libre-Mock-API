import React from 'react';
import Button from './Button'
import '../index.css'

const Item = (props) => {

    const {id, thumbnail, title, rating, description, price, stock} = props;
    
    return(
        <div key={id} className='item_holder'>
            <div className='item_image_holder'>
                <img className={'item_image_l'} src={thumbnail} alt={title}/>
            </div>
            <div className='item_text_holder'>
                <div className='item_text_inner_holder'>
                    <p className='item_review'></p>
                    <p className='item_name'>{title}</p>
                    <p className='item_description'>{description}</p>
                    <p className='item_price'><span className='symbol'>£</span>{price} <span className='stock'>In stock ({stock})</span></p>
                </div>
                <Button total_quantity={stock} price={price} />
            </div>
        </div>
    );

} 
 
export default Item;