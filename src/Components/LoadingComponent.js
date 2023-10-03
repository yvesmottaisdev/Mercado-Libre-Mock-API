import React from 'react'
import '../index.css'

const q = 3;

const LoadingComponent = () => {

  return(
    [...Array(q)].map((e, i) => {
      return (
        <div className='loading_item_holder'>
          <div className='loading_item_image_holder'>
              <img className='loading_item_image' alt=''/>
          </div>
          <div className='loading_item_text_holder'>
              <div className='loading_item_text_inner_holder'>
                  <p className='loading_item_name'></p>
                  <p className='loading_item_description'></p>
                  <p className='loading_item_price'></p>
              </div>
          </div>
      </div>
      )
    })
  )

}

export default LoadingComponent