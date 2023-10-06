import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import LoadingCategory from './LoadingCategory'
import '../index.css'
import { useApplyContext } from '../Context/AppContext'

const Categories = () => {
    
    const [categories, setCategories] = useState([]);
    const {handleCategory } = useApplyContext();
    
    const [loading, setLoading] = useState(true);

    const handleCategoryValue = (data) => {

        handleCategory(data)

    }

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
            <div className='categories'>
                <p className='category-title'>Categorias</p>
            
            {
                categories.map((category) => {
                    return (
                        <Category 
                        key={category.id}
                        name={category.name}
                        value={category.id}
                        sendCategoryValue={handleCategoryValue}
                    />
                    )
                }) 
            }
            </div>
        )
    } else {
        return (
            <div className='categories'>
                <p className='category-title'>Categorias</p>
                <LoadingCategory/>
            </div>
        )
    }
}

export default Categories;