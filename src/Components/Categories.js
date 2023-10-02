
// const Categories = () => {

//     // const [categories, setCategories] = useState([]);

//     // const fetchCategories = async (options) => {
//     //     return await axios.request(cat_options)
//     //         .then(response => response.data)
//     //         .catch(e => {
//     //             console.log(e);
//     //         })
//     // }

//     // const filterByCategory = (value) => {
//     //     console.log('Filtering');
//     // }

//     // useEffect(() => {
 
//     //     fetchCategories(cat_options)
//     //     .then(data => {
//     //         console.log(data)
//     //     })
//     //     .catch( e => {
//     //         throw e
//     //     })

//     // }, []);

//     return (
//         // <Categories>
//         // {
//         //     categories.map((category) => {
//         //         return (
//         //             <Category 
//         //             key={category.tagCodes[0]}
//         //             name={category.CatName}
//         //             value={category.CategoryValue}
//         //             onClick={filterByCategory(category.CategoryValue)}
//         //         />
//         //         )
//         //     })
//         // }
//         // </Categories>
//         <></>
//     )
// }

// export default Categories;

import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Category from './Category'
import '../index.css'

const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: {
      lang: 'en',
      country: 'us'
    },
    headers: {
      'X-RapidAPI-Key': '786f2d1c44msh787c645bf650a0bp1049bfjsn2b8f004236fb',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const fetchItems = async () => {
        
        return await axios.request(options)
            .then(response => response.data)
            .catch(e => {
                console.log(e);
            })
    }
    useEffect(() => {
 
        fetchItems()
            .then(data => {
                setCategories(data);
            } )
            .catch(e => { throw e });

    }, []);


    return (
        <div className='wrapper'>
            <img className='brand-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'/>
            <div className='categories'>
            {
                categories.map((category) => {
                    return (
                        <Category 
                        key={category.tagCodes[0]}
                        name={category.CatName}
                        value={category.CategoryValue}
                    />
                    )
                }) 
            }
            </div>
        </div>
    )
}

export default Categories;