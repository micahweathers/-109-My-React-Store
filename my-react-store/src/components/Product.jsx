import "./Product.css"
import QntyPicker from "./QntyPicker"
import { useState } from "react"

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const total = (props.data.price * quantity).toFixed(2);
    
    return(
        <div className="product">
            <img src={`/images/` + props.data.image} alt="Product"/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${total}</label>
            </div>
            <QntyPicker quantity={quantity} setQuantity={setQuantity} />
        </div>
    )
}

export default Product;