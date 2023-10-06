import React from 'react'
import '../index.css'

const LoadingCategory = () => {
const q_cat = 20;

    return (
        [...Array(q_cat)].map(e => {
            return(
            <div className='loading category-holder'>
                <button className='loading category-button'>
                    &nbsp;
                </button>
            </div>
            )
        })
    )

}

export default LoadingCategory