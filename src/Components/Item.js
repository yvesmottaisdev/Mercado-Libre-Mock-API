import React from 'react';
import '../index.css'

const Item = (props) => {

    const {item_name, description, image, price, size, tag} = props;

    return(
        <div className='item_holder'>
            {
                tag.length > 0 &&
                <div className='item_tag_holder'>
                    <span className='item_tag'>{tag}</span>
                </div>
            }
            <div className='item_image_holder'>
                <img className={'item_image_' + size} src={image} alt=''/>
            </div>
            <div className='item_text_holder'>
                <div className='item_text_inner_holder'>
                    <a href={image}><p className='item_name'>{item_name}</p></a>
                    <p className='item_description'>{description}</p>
                </div>
                <button className='add_item_button'><p className='item_price'>Buy for <span className='item_price_symbol'>$</span>{price}</p></button>
            </div>
        </div>
    );

} 
 
export default Item;