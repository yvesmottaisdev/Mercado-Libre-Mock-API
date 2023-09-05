import React from 'react'
import items from '../Data/Item_Data'
import Item from './Item'
import '../index.css'

const ItemList = () => {

    return(
        <div className='item_list_holder'>
            {items.map((item) => (
            <Item key={item.id} {...item} />
            ))}
        </div>
    );

}

export default ItemList;