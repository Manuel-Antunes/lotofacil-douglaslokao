import axios from 'axios';

const api = axios.create({
    baseURL: 'http://104.131.30.200:3333'
});
export default api;