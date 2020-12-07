import axios from 'axios';
import config from '../config';

export const http = axios.create({
    baseURL: config.baseUri,
    headers: {
      "Content-Type": "application/json", 
  }   
});

export default http;

