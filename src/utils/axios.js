import axios from 'axios';

// Create axios instance with base URL
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://dwwy78aqdgea3.cloudfront.net'
});

// Set up axios defaults
const token = localStorage.getItem('token');
if (token) {
    instance.defaults.headers.common['x-auth-token'] = token;
}

// Add a request interceptor to always include the latest token
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        console.log('🔑 Axios Interceptor - Token from localStorage:', token ? 'EXISTS' : 'MISSING');
        console.log('🌐 Request URL:', config.baseURL + config.url);
        if (token) {
            config.headers['x-auth-token'] = token;
            console.log('✅ Token added to headers (x-auth-token)');
        } else {
            console.log('❌ No token found in localStorage');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle 401 errors
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('❌ 401 Unauthorized Error:', error.config.url);
            console.error('Request headers:', error.config.headers);
            // Temporarily disabled to debug - uncomment after fixing
            // localStorage.removeItem('token');
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default instance;
