import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    //  fetching products from local JSON 

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProductList(data))
    }, [])

    return (
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    );
};
