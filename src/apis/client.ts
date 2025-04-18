import { BASE_URL } from '@/constants/app';
import axios, { AxiosInstance } from 'axios';

const defaultAxiosConfig = {
  baseURL: `${BASE_URL}`,
  withCredentials: true,
};

export const client: AxiosInstance = axios.create(defaultAxiosConfig);
