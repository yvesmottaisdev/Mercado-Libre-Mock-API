import { React, useState } from "react";
import "../index.css";

const Button = (props) => {

	const { total_quantity } = props;

	const [quantity, setQuantity] = useState(0);
	const [message, setMessage] = useState(false);

	function handleAddItem() {

		if(quantity === total_quantity)
		{
			setQuantity(quantity);
			setMessage(true);
			return;
		} 

		setQuantity(quantity + 1);
	}

	function handleDeleteItem() {

		if(quantity === 0)
		{
			setQuantity(0);
			return;
		}
		
		setQuantity(quantity - 1);
		setMessage(false);

	}


	return (
		<>
			<div className="add_item">
				<button className="item_button" onClick={handleAddItem}>+</button>
				<p className="item_quantity">{quantity}</p>
				<button className="item_button" onClick={handleDeleteItem}>-</button>
			</div>
			{message && (
				<p className="out_of_stock">
					You've reached the maximum quantity of this product you can add into
					your cart
				</p>
			)}
		</>
	);
};

export default Button;
