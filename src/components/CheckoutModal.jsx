import './CheckoutModal.css';

function CheckoutModal({ isOpen, onClose, orderDetails }) {
  if (!isOpen) return null;

  const {
    subtotal,
    discount,
    discountAmount,
    total,
    itemCount,
    couponCode
  } = orderDetails;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'checkout-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="checkout-modal-overlay" onClick={handleOverlayClick}>
      <div className="checkout-modal-content">
        <button className="checkout-modal-close" onClick={onClose}>×</button>
        
        <div className="checkout-modal-header">
          <div className="checkout-success-icon">✓</div>
          <h2>Payment Successful!</h2>
          <p className="checkout-modal-subtitle">Your order has been confirmed</p>
        </div>
        
        <div className="checkout-modal-body">
          <div className="order-summary">
            <div className="order-row">
              <span className="order-label">Subtotal:</span>
              <span className="order-value">${subtotal}</span>
            </div>
            
            {discount > 0 && (
              <div className="order-row discount">
                <span className="order-label">Discount ({discount}%):</span>
                <span className="order-value">-${discountAmount}</span>
              </div>
            )}
            
            <div className="order-row total">
              <span className="order-label">Total Paid:</span>
              <span className="order-value">${total}</span>
            </div>
          </div>

          <div className="order-details">
            <div className="detail-row">
              <span className="detail-icon">🛍️</span>
              <span className="detail-text">{itemCount} item{itemCount !== 1 ? 's' : ''} purchased</span>
            </div>
            {couponCode && (
              <div className="detail-row">
                <span className="detail-icon">🎟️</span>
                <span className="detail-text">Coupon "{couponCode}" applied</span>
              </div>
            )}
            <div className="detail-row">
              <span className="detail-icon">📧</span>
              <span className="detail-text">Confirmation email sent</span>
            </div>
          </div>
        </div>
        
        <div className="checkout-modal-footer">
          <button className="btn-close-modal" onClick={onClose}>
            Continue Shopping
          </button>
          <p className="thank-you-message">Thank you for rocking with us! 🤘</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;