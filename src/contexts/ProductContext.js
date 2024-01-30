import React, { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    // Product state
    const [products, setProducts] = useState([]);

    // Fetch Products
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        };
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;