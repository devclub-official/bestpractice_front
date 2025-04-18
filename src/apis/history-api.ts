import { client } from './client';

export const fetchHistory = async () => client.get('/api/config-history/');
