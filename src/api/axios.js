import axios from 'axios';

const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;

console.log('REACT_APP_SERVER_PORT', REACT_APP_SERVER_PORT);
// Create axios instance
const instance = axios.create({
  baseURL: REACT_APP_SERVER_PORT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
