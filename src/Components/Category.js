import {React, useState} from 'react'
import '../index.css'

const Category = ( props ) => {

    const { name, value, sendCategoryValue } = props;

    const handleGetValue = (e) => {

        e.preventDefault();
        const categoryValue = e.target.value;
        sendCategoryValue(categoryValue);
        
    }

    return (
        <div className='category-holder'>
            <button value={value} className='category-button' onClick={handleGetValue}>
                {name}
            </button>
        </div>
    )
}

export default Category