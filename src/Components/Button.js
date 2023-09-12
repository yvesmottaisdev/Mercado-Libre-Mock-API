import { React, useState } from "react";

import "../index.css";

const Button = (props) => {
  const { total_quantity } = props;

  const [quantity, setQuantity] = useState(0);

  function handleAddItem() {
    quantity === total_quantity ? setQuantity(quantity) : setQuantity(quantity + 1);
  }

  function handleDeleteItem() {
    quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
  }

  return (
    <div className="add_item">
      <button className="item_button" onClick={handleAddItem}>
        +
      </button>
      <p className="item_quantity">{quantity}</p>
      <button className="item_button" onClick={handleDeleteItem}>
        -
      </button>
    </div>
  );
};

export default Button;
