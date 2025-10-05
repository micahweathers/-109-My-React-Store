import "./Product.css"
import QntyPicker from "./QntyPicker"
import { useState } from "react"

function Product(){
    // Generate random price between $10-$99
    const [price] = useState((Math.random() * 89 + 10).toFixed(2));
    const [quantity, setQuantity] = useState(1);
    
    // Calculate total
    const total = (price * quantity).toFixed(2);
    
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="Product"/>
            <h5>Product Title goes here</h5>
            <div className="prices">
                <label>Price: ${price}</label>
                <label>Total: ${total}</label>
            </div>
            <QntyPicker quantity={quantity} setQuantity={setQuantity} />
        </div>
    )
}

export default Product;