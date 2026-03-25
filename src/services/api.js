import axios from 'axios';

// Production API URL with fallback - FORCE REBUILD WITH NEW URL
const API_URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || 'https://bouncesteps-backend-392429231515.us-central1.run.app/api';

console.log('🚨 API URL IN USE:', API_URL);
console.log('🔧 Environment Variables:', {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL
});

console.log('🚨 API URL IN USE:', API_URL);

if (!API_URL) {
  throw new Error('🚨 VITE_API_URL environment variable is required in production');
}

const api = axios.create({
  baseURL: `${API_URL}/admin`,
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
