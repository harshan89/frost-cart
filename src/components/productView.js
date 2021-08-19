import React, { useState, useMemo } from 'react';
import defaultImage from '../default-image.jpg';
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions';
import { useAlert } from 'react-alert';

const ViewProduct = ({product, cartData, addToCart, backToList}) => {

    const alert = useAlert();
    const [qty, setQty] = useState(1);
    const isAddedToCart = useMemo(() => {
        return cartData.find(p => p.name === product.name);
    }, [cartData, product.name]);

    const onChange = (value) => {
        if (product.stock > value) {
            setQty(value);
        }
        else {
            alert.error(`Sorry! ${product.stock} items in stock`);
        }
    };

    return (
        <div className='productView'>
            <button onClick={() => backToList()} className='backButton'><i className="fa fa-arrow-left"></i> Back to List</button>
            <div className='card'>
                <img src={product.imageUrl ? product.imageUrl : defaultImage} alt={product.name} />
                <h1>{product.name}</h1>
                <p className="price">${product.price}</p>
                <p>{`${product.description.substring(0, 100)}...`}</p>
                <div className="actions">
                    <input
                        type="text"
                        name='qty'
                        value={qty}
                        onChange={(e) => onChange(parseInt(e.target.value ? e.target.value : 0))}
                        disabled={isAddedToCart}
                    />
                    {isAddedToCart ?
                        <button className='inCart'>In Cart</button> :
                        <button onClick={() => addToCart(product, qty)}>Add to Cart &nbsp;<i className="fa fa-plus"></i></button>}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (product, qty) => dispatch(addToCart(product, qty))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(ViewProduct);