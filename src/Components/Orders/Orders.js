import React, { useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import "./Orders.css"

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    return (
        <div>
            <h3>This is Orders: {products.length}</h3>
            <p>Cart has: {cart.length}</p>
        </div>
    );
};

export default Orders;