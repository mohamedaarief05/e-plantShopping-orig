import { useState } from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function AppContent() {
  const [view, setView] = useState('landing'); // 'landing' | 'products' | 'cart' | 'about'
  const cartItems = useSelector((state) => state.cart.items);
  const totalInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {/* Landing Page */}
      {view === 'landing' && (
        <div className="background-image">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>
            <p>
              Discover beautiful plants for every space. Breathe life into your home with our
              hand-picked selection of air purifying, aromatic, medicinal, and low-maintenance plants.
            </p>
            <button
              className="get-started-btn"
              onClick={() => setView('products')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* All other views share the navbar */}
      {view !== 'landing' && (
        <>
          <nav className="navbar">
            <span className="navbar-brand" onClick={() => setView('landing')}>
              🌿 Paradise Nursery
            </span>
            <div className="navbar-links">
              <button onClick={() => setView('products')}>Plants</button>
              <button onClick={() => setView('about')}>About Us</button>
              <button className="cart-icon-btn" onClick={() => setView('cart')}>
                🛒
                {totalInCart > 0 && (
                  <span className="cart-count-badge">{totalInCart}</span>
                )}
              </button>
            </div>
          </nav>

          {view === 'products' && <ProductList onCartClick={() => setView('cart')} />}
          {view === 'cart' && <CartItem onContinueShopping={() => setView('products')} />}
          {view === 'about' && <AboutUs />}
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
