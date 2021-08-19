import axios from 'axios';

const catStoreApi = {
    fetchProducts: () => axios.get('http://cat-store-api.frostdigital.se/api')
}

export default catStoreApi;
