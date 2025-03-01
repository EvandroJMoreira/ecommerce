import React from 'react';

const Header = ({ cartItemCount, onCartClick, language, setLanguage, translations }) => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
            <h1>{translations.title}</h1>
            <div>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="pt">Português</option>
                    <option value="en">English</option>
                </select>
                <button onClick={onCartClick}>
                    🛒 {translations.buttons.viewCart} ({cartItemCount})
                </button>
            </div>
        </header>
    );
};

export default Header;
