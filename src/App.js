import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import products from './data/products.json';
import translations from './i18n/translations';

function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [language, setLanguage] = useState('pt');  // Adiciona controle de idioma

    const addToCart = (product) => setCart([...cart, product]);

    const handleCartClick = () => setShowCart(true);
    const handleCloseCart = () => setShowCart(false);

    const t = translations[language];  // Pegamos a tradução no idioma atual

    return (
        <div>
            <Header 
                cartItemCount={cart.length} 
                onCartClick={handleCartClick} 
                language={language} 
                setLanguage={setLanguage}
                translations={t}
            />
            <ProductList 
                products={products} 
                addToCart={addToCart} 
                translations={t}
            />
            <CartModal 
                show={showCart} 
                handleClose={handleCloseCart} 
                cartItems={cart} 
                translations={t}
            />
        </div>
    );
}

export default App;
