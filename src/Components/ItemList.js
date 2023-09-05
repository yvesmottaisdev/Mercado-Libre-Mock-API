import React from 'react'
import items from '../Data/Item_Data'
import Item from './Item'

const ItemList = () => {

    return(
        <div>
            {items.map((item) => (
            <Item key={item.id} {...item} />
            ))}
        </div>
    );

}

export default ItemList;