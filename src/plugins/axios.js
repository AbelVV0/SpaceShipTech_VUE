import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Cambia esta URL por la de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
