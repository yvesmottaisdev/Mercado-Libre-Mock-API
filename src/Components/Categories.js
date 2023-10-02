import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import LoadingCategory from './LoadingCategory'
import '../index.css'

const options = {
    method: 'GET',
    url: 'https://unofficial-shein.p.rapidapi.com/navigations/get-tabs',
    params: {
      language: 'en',
      country: 'US',
      currency: 'USD'
    },
    headers: {
      'X-RapidAPI-Key': '786f2d1c44msh787c645bf650a0bp1049bfjsn2b8f004236fb',
      'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
    }
  };

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        
        return await axios.request(options)
            .then(response => response.data.info.tabs)
            .catch(e => {
                console.log(e);
            })
    }
    useEffect(() => {
 
        fetchItems()
            .then(data => {
                setCategories(data);
                setLoading(false);
            } )
            .catch(e => { throw e });

    }, []);

    if(!loading){
        return (
            <div className='wrapper'>
                <img className='brand-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Shein-logo.png/640px-Shein-logo.png'/>
                <div className='categories'>
                {
                    categories.map((category) => {
                        return (
                            <Category 
                            key={category.id}
                            name={category.name}
                            value={category.cat_id}
                        />
                        )
                    }) 
                }
                </div>
            </div>
        )
    } else {
        return (
        <div className='wrapper'>
            <img className='brand-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Shein-logo.png/640px-Shein-logo.png'/>
            <div className='categories'>
                <LoadingCategory/>
            </div>
        </div>
        )
    }
}

export default Categories;