import { React, useState} from 'react'
import '../index.css'

const Button = (props) => {

    const { total_quantity, price } = props;

    const [quantity, setQuantity] = useState(0);
    const [response, setResponse] = useState('');

    function handleClick(){
        
        
        if(total_quantity && quantity === total_quantity )
        {
            setResponse('not available');

        } else {
            
            setQuantity(quantity + 1);
        }

    }

  return (
    <button className='add_item_button' onClick={handleClick}>
        <p className='item_price'>Buy for 
            <span className='item_price_symbol'>$</span>{price} ({quantity}) {response}
        </p>
    </button>
  )
}

export default Button
