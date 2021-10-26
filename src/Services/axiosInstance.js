import axios from 'axios';

const baseURL = process.env.BACKEND_URL;
let headers = {};

if (token) {
    headers = {
        'X-Custom-Header': 'foobar',
        'Authorization': `Bearer ${token}`
    }
}

const instance = axios.create({
    baseURL: baseURL,
    headers
});

export default instance;