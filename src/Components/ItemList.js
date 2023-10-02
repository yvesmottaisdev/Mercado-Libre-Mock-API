import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
import LoadingComponent from './LoadingComponent'
import '../index.css'

const options = {
    method: 'GET',
    url: 'https://unofficial-shein.p.rapidapi.com/products/list',
    params: {
      cat_id: '2297',
      adp: '10170797',
      language: 'en',
      country: 'US',
      currency: 'USD',
      sort: '7',
      limit: '20',
      page: '8'
    },
    headers: {
      'X-RapidAPI-Key': '786f2d1c44msh787c645bf650a0bp1049bfjsn2b8f004236fb',
      'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
  };

const loadingText = [
    'Loading the latest styles just for you...',
    'Hang tight, we are fetching your fashion fix!',
    'Your wardrobe upgrade is loading...',
    'Just a moment while we bring you the best deals...',
    'Your fashion journey is about to begin. Loading now...',
    'Get ready to shop until you drop! Loading in progress...',
    'Loading the hottest trends of the season...'
]

const ItemList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async (options) => {
        
        return await axios.request(options)
            .then(response => response.data.info.products)
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
 
        fetchItems(options)
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch( e => {
                throw e
            })
    }, []);

    if(!loading){
        return(
            <div className='item_list_holder'>
                {items.map((item) => {
                    return (
                        <Item key={item.goods_id}
                             title={item.goods_name}
                             description={'pepe'}
                             price={item.retailPrice.amount}
                             stock={Math.floor(Math.random() * 100)}
                             thumbnail={item.goods_img}/>
                    )
                })}
            </div>
        );      

    } else {

        return(
            <div className='item_list_holder'>
                <LoadingComponent/>
            </div>
        );      

    }

}

export default ItemList;