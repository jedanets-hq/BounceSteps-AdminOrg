import axios from 'axios';

// Use environment variable with production fallback
const API_URL = import.meta.env.VITE_API_URL || 
                import.meta.env.VITE_API_BASE_URL || 
                'https://api.bouncesteps.com';

if (!API_URL) {
  throw new Error('🚨 VITE_API_URL or VITE_API_BASE_URL environment variable is required');
}

console.log('🚨 API URL IN USE:', API_URL);
console.log('🔧 Environment Variables:', {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  MODE: import.meta.env.MODE
});

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Handle responses
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
