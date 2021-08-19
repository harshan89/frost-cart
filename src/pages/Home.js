import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductList from '../components/productList';
import ProductView from '../components/productView';
import Cart from '../components/cart';
import StockSummary from '../components/stockSummary';

const Home = ({productsData, fetchProducts}) => {
    const [product, setProduct] = useState(null);
    const [diplayCart, setDiplayCart] = useState(true);


    const selectProduct = (product) => {
        setProduct(product);
    };

    const backToList = () => {
        setProduct(null);
    };

    const toggleCart = () => {
        setDiplayCart(!diplayCart);
    };

    return (
        <div className='home'>
            <div className='productsContainer'>
                {!product && <ProductList selectProduct={selectProduct}/>}
                {product && <ProductView product={product} backToList={backToList}/>}
            </div>
            <div className='rightPanel'>
                {!diplayCart && <i onClick={() => toggleCart()} className="fa fa-cart-plus displayCart"></i>}

                {diplayCart &&
                    <>
                        <div className='cart'>
                            <Cart toggleCart={toggleCart}/>
                        </div>
                    </>
                }
                <div className='summary'>
                    <StockSummary/>
                </div>
            </div>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        productsData: state.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(Home);