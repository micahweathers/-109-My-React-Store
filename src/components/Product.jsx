import "./Product.css"
import QntyPicker from "./QntyPicker"
import CartModal from "./CartModal"
import { useState } from "react"

function Product(props){
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const total = (props.data.price * quantity).toFixed(2);
    
    // Mock rating data
    const rating = props.data.rating;
    const reviewCount = props.data.reviewCount;
    
    const handleAddToCart = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setQuantity(1);
    };
    
    return(
        <>
            <div className="product">
                <img src={`/images/` + props.data.image} alt="Product"/>
                <h5>{props.data.title}</h5>
                
                {/* Star Rating */}
                <div className="rating">
                    <div className="stars">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span key={star} className={star <= rating ? 'star filled' : 'star'}>
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="review-count">({reviewCount} reviews)</span>
                </div>
                
                <div className="prices">
                    <label>Price: ${props.data.price.toFixed(2)}</label>
                    <label>Total: ${total}</label>
                </div>
                
                <QntyPicker quantity={quantity} setQuantity={setQuantity} />
                
                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>

            <CartModal 
                isOpen={isModalOpen}
                onClose={closeModal}
                product={props.data}
                quantity={quantity}
                total={total}
            />
        </>
    )
}

export default Product;