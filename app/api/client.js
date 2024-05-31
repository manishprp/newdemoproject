import {create} from 'apisauce';

const apiClient = create({
  timeout: 2000,
  baseURL: 'https://dummyjson.com/',
});

export default apiClient;
