import apiClient from './client';

const categoriesEndpoint = 'products/categories';
const productEndpoint = 'products/category/';
const searchEndpoint = 'products/search?q=';

const getCategories = () => apiClient.get(categoriesEndpoint);
const getProductList = category => apiClient.get(productEndpoint + category);
const searchProduct = query => apiClient.get(searchEndpoint + query);

export default {getCategories, getProductList, searchProduct};
