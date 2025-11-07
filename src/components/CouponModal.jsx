import { useState, useEffect } from 'react';
import './CouponModal.css';

function CouponModal({ isOpen, onClose, onConfirm, type, coupon }) {
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');

  useEffect(() => {
    if (type === 'edit' && coupon) {
      setCode(coupon.code);
      setDiscount(coupon.discount.toString());
    } else {
      setCode('');
      setDiscount('');
    }
  }, [isOpen, type, coupon]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (type === 'edit' && code && discount) {
      onConfirm(code, parseInt(discount));
    } else if (type === 'delete') {
      onConfirm();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'coupon-modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="coupon-modal-overlay" onClick={handleOverlayClick}>
      <div className="coupon-modal-content">
        <button className="coupon-modal-close" onClick={onClose}>×</button>
        
        <div className="coupon-modal-header">
          <div className={`coupon-modal-icon ${type === 'delete' ? 'delete' : ''}`}>
            {type === 'edit' ? '✏️' : '🗑️'}
          </div>
          <h2>{type === 'edit' ? 'Edit Coupon' : 'Delete Coupon'}</h2>
        </div>
        
        <div className="coupon-modal-body">
          {type === 'edit' ? (
            <>
              <div className="coupon-form-group">
                <label>Coupon Code</label>
                <input 
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter coupon code"
                  autoFocus
                />
              </div>
              <div className="coupon-form-group">
                <label>Discount (%)</label>
                <input 
                  type="number"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter discount percentage"
                  min="0"
                  max="100"
                />
              </div>
            </>
          ) : (
            <p>Are you sure you want to delete the coupon <strong>{coupon?.code}</strong>?</p>
          )}
        </div>
        
        <div className="coupon-modal-footer">
          {type === 'edit' ? (
            <>
              <button 
                className="coupon-btn-primary" 
                onClick={handleSubmit}
                disabled={!code || !discount}
              >
                Save Changes
              </button>
              <button className="coupon-btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button className="coupon-btn-danger" onClick={handleSubmit}>
                Delete
              </button>
              <button className="coupon-btn-secondary" onClick={onClose}>
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CouponModal;