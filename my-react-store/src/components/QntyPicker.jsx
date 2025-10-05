import "./QntyPicker.css"
import { useState } from "react"

let value = 0;

function QuantityPicker(){
    /*    [value, function]=state var (init var) */
    const [quantity, setQuantity]=useState (1);
    function decrease(){
        let val = quantity -1;
        setQuantity(val);
        console.log(quantity);
    }
    function increase(){
        let val = quantity +1;
        setQuantity(val);
        console.log(quantity);
    }
    return( 
        <div className="btn-Qnty">
            <button className="btnDecrease" onClick={decrease}>-</button>
            <label className="quantity-display">{quantity}</label>
            <button className="btnIncrease" onClick={increase}>+</button>
            {console.log("clicked")}
        </div> 
    )
}

export default QuantityPicker