import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const StockSummary = ({productsData})=> {
    const ranges = [100, 200, 300];
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categoriesTemp = [];

        for (let x = 0; x < ranges.length; x++) {
            let obj = {};

            if (x===0) {
                obj = {
                    key: x,
                    category: `0 - ${ranges[x]}`,
                    min: 0,
                    max: 100,
                    products: []
                }
            }
            else {
                obj = {
                    key: x,
                    category: `${ranges[x-1]} - ${ranges[x]}`,
                    min: ranges[x-1],
                    max: ranges[x],
                    products: []
                }
            }

            categoriesTemp.push(obj);
        }

        setCategories(categoriesTemp);

        const filterProducts = () => {
            const _categories = categories.map(cat => {
                cat.products = [];
                productsData.forEach(p => {
                    const productPrice = p.price;
                    if (cat.min < productPrice && cat.max > productPrice) {
                        cat.products.push(p);
                    }
                });
                return cat;
            });

            setCategories(_categories);
        };

        if (productsData.length > 0)
            filterProducts();
    }, [productsData]);

    return(
        <div className='stockSummary'>
            <h2>Summary</h2>
            {categories.length > 0 &&
            categories.map((cat, key)=> <p key={key}>{cat.category} => {cat.products.length} Products(s), Total {cat.products.reduce((prev, curr) => prev += curr.price * curr.stock, 0)}</p>)
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        productsData: state.products.products
    }
};

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(StockSummary);