import "./QntyPicker.css"

function QuantityPicker({ quantity, setQuantity }){
    function decrease(){
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    
    function increase(){
        setQuantity(quantity + 1);
    }
    
    return( 
        <div className="btn-Qnty">
            <button className="btnDecrease" onClick={decrease}>-</button>
            <label className="quantity-display">{quantity}</label>
            <button className="btnIncrease" onClick={increase}>+</button>
        </div> 
    )
}

export default QuantityPicker