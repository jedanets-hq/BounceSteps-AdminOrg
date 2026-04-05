import axios from 'axios';

// Use environment variable with production fallback
const API_URL = import.meta.env.VITE_API_URL || 
                import.meta.env.VITE_API_BASE_URL || 
                'https://api.bouncesteps.com/api';

console.log('🚨 API URL IN USE:', API_URL);
console.log('🔧 Environment Variables:', {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  MODE: import.meta.env.MODE
});

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add JWT token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken') || localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log('✅ JWT token added to request');
    } else {
      console.log('⚠️ No JWT token found in localStorage');
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      console.error('⚠️ Unauthorized - Token may be expired');
      localStorage.removeItem('authToken');
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default api;
