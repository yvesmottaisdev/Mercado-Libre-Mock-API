import React from 'react'
import '../index.css'

const LoadingCategory = () => {
const q_cat = 20;

    return (
        [...Array(q_cat)].map((e, i)=> {
            return(
            <div className='loading category-holder' key={i}>
                <button className='loading category-button'>
                    &nbsp;
                </button>
            </div>
            )
        })
    )

}

export default LoadingCategory