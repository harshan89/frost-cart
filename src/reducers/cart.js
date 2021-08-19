const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.filter((item, index) => item.name === action.payload.name).length || action.payload.qty === 0)
                return state;

            return [
                ...state,
                {
                    ...action.payload
                }
            ];

        case 'CART_ITEM_REMOVED':
            return state.filter((item, index) => item.name !== action.payload.name); // wrong check because api doesn't have a product id

        case 'CART_PRODUCT_QTY_UPDATED':
            return state.map((item, index) => {
                if (item.name === action.payload.name)
                    item.qty = action.payload.qty;

                return item;
            });

        case 'CART_CLEARED':
            return [];

        default:
            return state
    }
};

export default cart;
