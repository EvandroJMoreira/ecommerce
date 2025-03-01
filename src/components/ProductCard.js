import React from 'react';

const ProductCard = ({ product, addToCart, translations }) => (
  <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '0.5rem' }}>
    <img
      src={product.imagem}
      alt={product.nome}
      style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
    />

    <h3>{product.nome}</h3>
    <p>{product.descricao}</p>
    <p><strong>R$ {product.preco.toFixed(2)}</strong></p>
    <button onClick={() => addToCart(product)}>
      {translations.buttons.addToCart}
    </button>
  </div>
);

export default ProductCard;
