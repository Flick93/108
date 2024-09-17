import { useState } from "react";
import "./QuantityPicker.css"

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
        let value = quantity + 1;
        setQuantity(value);
    }
    function handleDecrease(){
        let value = quantity - 1;
        if(value <1) return;

        setQuantity(value);
    }

    return(
        
        <div className="qt-picker">

        <button className="btn btn-sm btn-dark" disabled={quantity == 1} onClick={handleDecrease}>-</button>

        <label>{quantity}</label>

        <button className="btn btn-sm btn-dark" onClick={handleIncrease}>+</button>

        </div>
    )
}

export default QuantityPicker;