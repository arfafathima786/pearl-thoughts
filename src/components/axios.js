import axios from 'axios';

// Define the base URL of your API
const API_BASE_URL = 'https://api.example.com';

// Define your API key (replace 'YOUR_API_KEY' with your actual API key)
const API_KEY = 'your_actual_api_key_here';

// Create an Axios instance with custom headers
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default api;
