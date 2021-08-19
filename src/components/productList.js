import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { fetchProducts } from '../actions/productActions';
import Product from '../components/product';

const override = css`
  position: absolute;
  margin: auto;
  border-color: #36D7B7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0
`;

const ProductList = ({productsData, fetchProducts, selectProduct}) => {

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return productsData.error ? (
        <h2>{productsData.error}</h2>
    ) : (
        <div>
            <HashLoader loading={productsData.loading} css={override} size={150} />
            <h1>Product List</h1>
            <div className='productList'>
                {
                    productsData &&
                    productsData.products &&
                    productsData.products.map((product, key) => <Product key={key} product={product} selectProduct={() => selectProduct(product)}/>)
                }
            </div>
        </div>
    );
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
(ProductList);