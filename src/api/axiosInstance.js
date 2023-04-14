import axios from 'axios';

export const axiosIntance = axios.create({
  baseUrl: 'https://e-commerce-api-v2.academlo.tech/api/v1/',
});
