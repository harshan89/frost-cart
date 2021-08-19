import catStoreApi from '../adapters/catStoreApi';
import { FETCH_PRODUCTS_SUCCESS } from '../types';

const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        catStoreApi.fetchProducts()
            .then(response => {
                const products = response.data.products;
                dispatch(fetchProductsSuccess(products));
            })
            .catch(error => {

            })
    }
}