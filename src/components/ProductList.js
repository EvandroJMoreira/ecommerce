import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, translations }) => {
    // Filtrar produtos por segmento
    const roupas = products.filter(p => p.segmento === 'Roupas Masculinas');
    const eletronicos = products.filter(p => p.segmento === 'Eletrônicos');
    const livros = products.filter(p => p.segmento === 'Livros');

    return (
        <div style={{ padding: '2rem' }}>
            <h2>{translations.categories.clothes}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {roupas.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                        translations={translations}
                    />
                ))}
            </div>

            <h2>{translations.categories.electronics}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {eletronicos.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                        translations={translations}
                    />
                ))}
            </div>

            <h2>{translations.categories.books}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {livros.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={addToCart} 
                        translations={translations}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
