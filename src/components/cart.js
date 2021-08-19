import React from 'react';
import { connect } from 'react-redux';
import CartProduct from './cartProduct';
import { removeProduct, updateCartProductQty, clearCart } from '../actions/cartActions';
import { useHistory } from 'react-router-dom';

const Cart = ({cartData, removeProduct, toggleCart, updateCartProductQty, clearCart}) => {

    const history = useHistory();

    const onBuyClick = () => {
        clearCart()
        history.push("/payment");
    };

    return cartData.error ? (
        <h2>{cartData.error}</h2>
    ) : (
        <div className='cart'>
            { cartData.length > 0 && <i className="fa fa-arrow-right displayCart" onClick={() => toggleCart()}></i> }
            {
                cartData &&
                cartData.map((product, key) => <CartProduct
                    key={key}
                    product={product}
                    removeProduct={removeProduct}
                    updateCartProductQty={updateCartProductQty}/>
                )
            }

            {
                cartData.length > 0 && <p className='cartTotal'>Cart Total <span>${parseFloat(cartData.reduce((prev, curr) => prev += curr.price * curr.qty, 0)).toFixed(2)}</span></p>
            }

            {
                cartData.length > 0 && <button className='buyNow' onClick={() => onBuyClick()}>BUY NOW</button>
            }

        </div>
    );
};

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        removeProduct: (product) => dispatch(removeProduct(product)),
        updateCartProductQty: (product, qty) => dispatch(updateCartProductQty(product, qty)),
        clearCart: () => dispatch(clearCart())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Cart);