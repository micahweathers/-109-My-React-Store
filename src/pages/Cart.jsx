import GlobalContext from '../state/GlobalContext'
import { useContext } from 'react'
import './Cart.css'

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart
    const updateQuantity = useContext(GlobalContext).updateProductQuantity
    const clearCart = useContext(GlobalContext).clearCart

    // Calculate grand total
    const getGrandTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    };

    // Handle quantity increase
    const increaseQuantity = (productId, currentQuantity) => {
        updateQuantity(productId, currentQuantity + 1);
    };

    // Handle quantity decrease
    const decreaseQuantity = (productId, currentQuantity) => {
        if (currentQuantity > 1) {
            updateQuantity(productId, currentQuantity - 1);
        }
    };

    return (
        <div className='cart-page'>
            <div className='cart-header'>
                <h1>
                    <img src="/images/rock-and-roll.png" alt="rock" className="header-icon" />
                    Your Cart
                    <img src="/images/rock-and-roll.png" alt="rock" className="header-icon flip" />
                </h1>
                <p className='cart-subtitle'>Rock your cart! 🤘</p>
            </div>

            {cart.length === 0 ? (
                <div className='empty-cart'>
                    <img src="/images/shopping-basket.png" alt="empty cart" className="empty-icon" />
                    <p>Your cart is empty. Time to fill it with some punk gear!</p>
                </div>
            ) : (
                <>
                    <div className='cart-card'>
                        {cart.map(product =>
                            <div className='cart-info' key={product.id}>
                                <img src={'/images/' + product.image} alt={product.title} />
                                
                                <div className='product-details'>
                                    <div className='product-title'>{product.title}</div>
                                    <div className='product-category'>Category: {product.category}</div>
                                    <div className='product-price'>Price: ${product.price.toFixed(2)}</div>
                                    <div className='item-total'>
                                        Item Total: ${(product.price * product.quantity).toFixed(2)}
                                    </div>
                                </div>

                                <div className='cart-controls'>
                                    {/* Quantity Adjuster */}
                                    <div className='quantity-section'>
                                        <label>Quantity</label>
                                        <div className='quantity-controls'>
                                            <button 
                                                className='qty-btn' 
                                                onClick={() => decreaseQuantity(product.id, product.quantity)}
                                            >
                                                -
                                            </button>
                                            <span className='quantity-display'>{product.quantity}</span>
                                            <button 
                                                className='qty-btn' 
                                                onClick={() => increaseQuantity(product.id, product.quantity)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <button onClick={() => removeProduct(product.id)} className='remove-btn'>
                                        <img src="/images/delete.png" alt="remove"/>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    <div className='cart-summary'>
                        <div className='summary-divider'></div>
                        <div className='grand-total'>
                            <span className='summary-label'>Grand Total:</span>
                            <span className='summary-value'>${getGrandTotal()}</span>
                        </div>
                        
                        <div className='cart-actions'>
                            <button className='checkout-btn'>
                                <img src="/images/rock-and-roll.png" alt="rock" className="btn-icon" />
                                Checkout
                                <img src="/images/rock-and-roll.png" alt="rock" className="btn-icon flip" />
                            </button>
                            <button className='clear-cart-btn' onClick={clearCart}>
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart