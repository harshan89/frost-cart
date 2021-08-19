const initialState = {
    products: [],
    loading: true,
    error: null
};

const productList = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                products: action.payload,
                loading: false
            }
        default:
            return state
    }
};

export default productList
