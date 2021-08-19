import { CART_ITEM_REMOVED } from '../types';
import { ADD_TO_CART, CART_PRODUCT_QTY_UPDATED, CART_CLEARED } from '../types';

export const removeProduct = product => {
    return {
        type: CART_ITEM_REMOVED,
        payload: product
    }
};

export const addToCart = (product, qty) => {
    return {
        type: ADD_TO_CART,
        payload: {
            ...product,
            qty
        }
    }
};

export const updateCartProductQty = (product, qty) => {
    return {
        type: CART_PRODUCT_QTY_UPDATED,
        payload: {
            ...product,
            qty
        }
    }
};

export const clearCart = () => {
    return {
        type: CART_CLEARED,
        payload: {}
    }
};