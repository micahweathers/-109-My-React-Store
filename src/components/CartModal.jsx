import { Link } from 'react-router-dom';
import './CartModal.css';

function CartModal({ isOpen, onClose, product, quantity, total }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="success-icon">✓</div>
          <h2>Added to Cart!</h2>
        </div>
        
        <div className="modal-body">
          <img src={`/images/${product.image}`} alt={product.title} />
          <div className="modal-details">
            <h3>{product.title}</h3>
            <p className="modal-quantity">Quantity: {quantity}</p>
            <p className="modal-total">Total: ${total}</p>
          </div>
        </div>
        
        <div className="modal-footer">
          <Link to="/cart" className="btn-go-cart">
            Go to Cart
          </Link>
          <button className="btn-continue" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;