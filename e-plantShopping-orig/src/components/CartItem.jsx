import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">
          Your cart is empty.{' '}
          <button
            onClick={onContinueShopping}
            style={{
              background: 'none',
              border: 'none',
              color: '#4caf50',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem',
            }}
          >
            Continue Shopping
          </button>
        </p>
      ) : (
        <>
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;
            return (
              <div key={item.id} className="cart-item-row">
                <img src={item.thumbnail} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} each</p>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => handleDecrement(item)}>
                    −
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button className="qty-btn" onClick={() => handleIncrement(item)}>
                    +
                  </button>
                  <button className="remove-btn" onClick={() => handleRemove(item)}>
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">${itemTotal.toFixed(2)}</div>
              </div>
            );
          })}

          <div className="cart-summary">
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <button
              onClick={onContinueShopping}
              style={{
                background: 'none',
                border: '1px solid #4caf50',
                color: '#4caf50',
                padding: '0.5rem 1.2rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.95rem',
              }}
            >
              ← Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
