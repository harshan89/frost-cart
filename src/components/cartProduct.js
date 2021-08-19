import React, { useState } from 'react';
import { useAlert } from 'react-alert';

const CartProduct = ({product, removeProduct, updateCartProductQty}) => {

    const alert = useAlert()
    const [qty, setQty] = useState(product.qty);

    const onChange = (value) => {
        if (product.stock > value) {
            setQty(value);
            updateCartProductQty(product, value);
        }
        else {
            alert.error(`Sorry! ${product.stock} items in stock`);
        }
    };

    const onBlur = (value) => {
        if (!value)
            removeProduct(product);
    };

    return (
        <div className='cartProduct'>
            <h4>{product.name}</h4>
            <div className='cartProductInfo'>
                <input
                    type="text"
                    name='qty'
                    value={qty}
                    onChange={(e) => onChange(parseInt(e.target.value ? e.target.value : 0))}
                    onBlur={(e) => onBlur(parseInt(e.target.value ? e.target.value : 0))}
                />
                <label>${ parseFloat(qty*product.price).toFixed(2) }</label>
                <button onClick={() => removeProduct(product)}><i className="fa fa-close"></i></button>
            </div>
        </div>
    )
}

export default CartProduct;