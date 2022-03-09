import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-v1.lufumart.com/api/v1'
});