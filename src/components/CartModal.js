import React from 'react';

const CartModal = ({ show, handleClose, cartItems, translations }) => {
    if (!show) return null;

    const total = cartItems.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div style={{ backgroundColor: '#fff', padding: '2rem', minWidth: '300px' }}>
                <h2>{translations.buttons.viewCart}</h2>
                {cartItems.length === 0 ? (
                    <p>{translations.cart.empty}</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>{item.nome} - R$ {item.preco.toFixed(2)}</li>
                        ))}
                    </ul>
                )}
                <p><strong>{translations.cart.total}: R$ {total}</strong></p>
                <button onClick={handleClose}>{translations.buttons.close}</button>
                {cartItems.length > 0 && <button>{translations.buttons.checkout}</button>}
            </div>
        </div>
    );
};

export default CartModal;
