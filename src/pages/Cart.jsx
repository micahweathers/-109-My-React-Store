import GlobalContext from '../state/GlobalContext'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import './Cart.css'
import CheckoutModal from '../components/CheckoutModal'

function Cart() {
    const cart = useContext(GlobalContext).cart
    const removeProduct = useContext(GlobalContext).removeProductFromCart
    const updateQuantity = useContext(GlobalContext).updateProductQuantity
    const clearCart = useContext(GlobalContext).clearCart

    // Coupon state
    const [couponCode, setCouponCode] = useState('')
    const [appliedCoupon, setAppliedCoupon] = useState(null)
    const [couponMessage, setCouponMessage] = useState('')
    const [messageType, setMessageType] = useState('') // 'success' or 'error'

    // Checkout Modal state
    const [checkoutModalOpen, setCheckoutModalOpen] = useState(false)

    // Calculate subtotal (before discount)
    const getSubtotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    // Calculate discount amount
    const getDiscountAmount = () => {
        if (!appliedCoupon) return 0;
        return (getSubtotal() * appliedCoupon.discount) / 100;
    };

    // Calculate grand total (after discount)
    const getGrandTotal = () => {
        return (getSubtotal() - getDiscountAmount()).toFixed(2);
    };

    // Get total item count
    const getTotalItemCount = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };

    // Apply coupon
    const applyCoupon = async () => {
        if (!couponCode.trim()) {
            setMessageType('error')
            setCouponMessage('Please enter a coupon code')
            return;
        }

        try {
            // Fetch all coupons from API
            const response = await axios.get('http://127.0.0.1:5000/api/coupons')
            const coupons = response.data.coupons
            
            // Find matching coupon (case insensitive)
            const foundCoupon = coupons.find(
                c => c.code.toUpperCase() === couponCode.toUpperCase()
            )

            if (foundCoupon) {
                setAppliedCoupon(foundCoupon)
                setMessageType('success')
                setCouponMessage(`Coupon "${foundCoupon.code}" applied! ${foundCoupon.discount}% off`)
                setCouponCode('')
            } else {
                setMessageType('error')
                setCouponMessage('Invalid coupon code')
            }
        } catch (error) {
            console.error('Error applying coupon:', error)
            setMessageType('error')
            setCouponMessage('Error applying coupon. Please try again.')
        }
    };

    // Remove coupon
    const removeCoupon = () => {
        setAppliedCoupon(null)
        setCouponMessage('')
        setMessageType('')
    };

    // Handle checkout
    const handleCheckout = () => {
        setCheckoutModalOpen(true)
    };

    // Handle checkout modal close
    const handleCheckoutModalClose = () => {
        setCheckoutModalOpen(false)
        clearCart()
        setAppliedCoupon(null)
    };

    // Clear message after 5 seconds
    useEffect(() => {
        if (couponMessage && messageType === 'error') {
            const timer = setTimeout(() => {
                setCouponMessage('')
                setMessageType('')
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [couponMessage, messageType])

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

            <CheckoutModal 
                isOpen={checkoutModalOpen}
                onClose={handleCheckoutModalClose}
                orderDetails={{
                    subtotal: getSubtotal().toFixed(2),
                    discount: appliedCoupon?.discount || 0,
                    discountAmount: getDiscountAmount().toFixed(2),
                    total: getGrandTotal(),
                    itemCount: getTotalItemCount(),
                    couponCode: appliedCoupon?.code || null
                }}
            />

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

                        {/* Coupon Section */}
                        <div className='coupon-section'>
                            <h3>Have a Coupon?</h3>
                            
                            {!appliedCoupon ? (
                                <>
                                    <div className='coupon-input-group'>
                                        <input 
                                            type="text"
                                            placeholder="Enter coupon code"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            onKeyPress={(e) => e.key === 'Enter' && applyCoupon()}
                                        />
                                        <button 
                                            className='apply-coupon-btn'
                                            onClick={applyCoupon}
                                            disabled={!couponCode.trim()}
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {couponMessage && (
                                        <div className={`coupon-message ${messageType}`}>
                                            {couponMessage}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className='applied-coupon'>
                                    <span>✓ {appliedCoupon.code} applied ({appliedCoupon.discount}% off)</span>
                                    <button 
                                        className='remove-coupon-btn'
                                        onClick={removeCoupon}
                                        title="Remove coupon"
                                    >
                                        ×
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Order Summary */}
                        <div className='summary-row subtotal'>
                            <span className='summary-row-label'>Subtotal:</span>
                            <span className='summary-row-value'>${getSubtotal().toFixed(2)}</span>
                        </div>

                        {appliedCoupon && (
                            <div className='summary-row discount'>
                                <span className='summary-row-label'>Discount ({appliedCoupon.discount}%):</span>
                                <span className='summary-row-value'>-${getDiscountAmount().toFixed(2)}</span>
                            </div>
                        )}

                        <div className='grand-total'>
                            <span className='summary-label'>Grand Total:</span>
                            <span className='summary-value'>${getGrandTotal()}</span>
                        </div>
                        
                        <div className='cart-actions'>
                            <button className='checkout-btn' onClick={handleCheckout}>
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