import { React, useState, useEffect} from "react";

import "../index.css";

const Button = (props) => {
  const { total_quantity } = props;
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState(false);

  function handleAddItem() {
    quantity === total_quantity ? setQuantity(quantity) : setQuantity(quantity + 1);
  }

  function handleDeleteItem() {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  }


  useEffect(() => {

    if(quantity === total_quantity){

      setMessage(true);

    } else {

      setMessage(false)

    }
  }, [quantity, total_quantity]);

  return (
    <>
    <div className="add_item">
      <button className="item_button" onClick={handleAddItem}>
        +
      </button>
      <p className="item_quantity">{quantity}</p>
      <button className="item_button" onClick={handleDeleteItem}>
        -
      </button>
    </div>
    {
      message && (
        <p className="out_of_stock">You've reached the maximum quantity for this product.</p>
      )
    }
    </>
  );
};

export default Button;
