import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import LoadingCategory from './LoadingCategory'
import '../index.css'

// const options = {
//     method: 'GET',
//     url: 'https://unofficial-shein.p.rapidapi.com/navigations/get-tabs',
//     params: {
//       language: 'en',
//       country: 'US',
//       currency: 'USD'
//     },
//     headers: {
//       'X-RapidAPI-Key': '786f2d1c44msh787c645bf650a0bp1049bfjsn2b8f004236fb',
//       'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
//     }
//   };

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchItems = async () => {
        
        return await axios.get('https://api.mercadolibre.com/sites/MLU/categories', {
            headers: {
                'Authorization': 'Bearer' + process.env.ACCESS_TOKEN
            }
        })
        .then(response => response.data)
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
                <img className='brand-logo' src='https://companieslogo.com/img/orig/MELI-ec0c0e4f.png?t=1648156112'/>
                <div className='categories'>
                    <p className='category-title'>Categorias</p>
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
            <img className='brand-logo' src='https://companieslogo.com/img/orig/MELI-ec0c0e4f.png?t=1648156112'/>
            <div className='categories'>
                <LoadingCategory/>
            </div>
        </div>
        )
    }
}

export default Categories;