import { React, useEffect, useState } from 'react'
import Button from './Button'
import data from '../Data/Item_Data'
import Item from './Item'
import '../index.css'

const url = 'https://dummyjson.com/products';

const ItemList = () => {

    const [items, setItems] = useState([]);
    
    const getItems = async () => {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)

        return data;
    }

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getItems();
            setItems(data.products);
        }

        fetchItems();
    },[]);

    return(
        <div className='item_list_holder'>
            {items.map((item) => {
                return (
                    <Item key={item.id} {...item} />
                )
            })}
        </div>
    );

}

export default ItemList;