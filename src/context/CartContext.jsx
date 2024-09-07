import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {



    const { user } = useContext(AuthContext)
    const [cart, setCart] = useState([]);

    // Add product to cart

    const addToCart = (product) => {
        if (user) {
            setCart((prevCart) => {
                const productExists = prevCart.find((item) => item.id === product.id);
                if (productExists) {
                    return prevCart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                } else {
                    return [...prevCart, { ...product, quantity: 1 }];
                }
            });
        }
        else {
            alert("Your a not user please 1st login")

        }

    };


    // Remove product from cart

    const removeFromCart = (productId) => {
        console.log("remove cart", productId);
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Update product quantity
    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
