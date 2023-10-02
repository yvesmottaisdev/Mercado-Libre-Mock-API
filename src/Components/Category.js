import React from 'react'
import '../index.css'

const Category = (props) => {

    const { name, value } = props;

    return (
        <div className='category-holder'>
            <button value={value} className='category-button'>
                {name}
            </button>
        </div>
    )
}

export default Category