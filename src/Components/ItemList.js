import { React } from 'react'
import data from '../Data/Item_Data'
import Item from './Item'
import '../index.css'

const ItemList = () => {

    return(
        <div className='item_list_holder'>
            {data.map((i) => (
                <Item key={i.id} {...i} />
            ))}
        </div>
    );

}

export default ItemList;