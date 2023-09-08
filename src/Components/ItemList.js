import { React, useState } from 'react'
import items from '../Data/Item_Data'
import Item from './Item'
import Button from './Button'

import '../index.css'

const ItemList = () => {

    const [item, setItem] = useState(items);

    return(

        <div className='item_list_holder'>
            {item.map((i) => (
                <Item key={i.id} {...i} />
            ))}
        </div>
    );

}

export default ItemList;