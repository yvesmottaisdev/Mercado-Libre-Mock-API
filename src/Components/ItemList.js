import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Item from './Item'
import LoadingComponent from './LoadingComponent'
import '../index.css'
import { useApplyContext } from '../Context/AppContext'

const ItemList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const {sendCategory } = useApplyContext();
    const {sendQuery} = useApplyContext();

    const fetchItems = async () => {
        
        setLoading(true)

        if(sendQuery && sendQuery.length > 0){

            const formattedQuery = sendQuery.replaceAll(" ", "%20");

            return await axios.get('https://api.mercadolibre.com/sites/MLU/search?q=' + formattedQuery, {
            headers: {
                'Authorization': 'Bearer' + process.env.ACCESS_TOKEN
            }
            })
            .then(response => response.data.results)
            .catch(e => {
                console.log(e);
            })

        }
            return await axios.get('https://api.mercadolibre.com/sites/MLU/search', {
                params: {
                  'category': sendCategory ? sendCategory : 'MLU1000'
                },
                headers: {
                    'Authorization': 'Bearer' + process.env.ACCESS_TOKEN
                }
              })
            .then(response => response.data.results)
            .catch(e => {
                console.log(e);
            })
        
    }

    useEffect(() => {
 
        fetchItems()
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch( e => {
                throw e
            })
    }, [sendCategory, sendQuery]);

    if(!loading){
        return(
            <div className='item_list_holder'>
                {items.map((item) => {
                    return (
                        <Item key={item.id}
                             title={item.title}
                             description={'pepe'}
                             price={item.price}
                             stock={Math.floor(Math.random() * 100)}
                             thumbnail={item.thumbnail}/>
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