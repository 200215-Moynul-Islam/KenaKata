import axios from 'axios';
import env from '@/config/env';

const apiClient = axios.create({
  baseURL: env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (attach token automatically)
apiClient.interceptors.request.use((config) => {
  // SSR SAFE GUARD
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// Response interceptor (global error handling)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // SSR SAFE GUARD
    if (typeof window !== 'undefined') {
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
