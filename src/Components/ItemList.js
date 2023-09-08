import { React, useState } from 'react'
import data from '../Data/Item_Data'
import Item from './Item'
import '../index.css'

const ItemList = () => {

    const [item, setItem] = useState(data);

    return(

        <div className='item_list_holder'>
            {item.map((i) => (
                <Item key={i.id} {...i} />
            ))}
        </div>
    );

}

export default ItemList;