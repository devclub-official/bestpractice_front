import { HistoryRequest } from '@/types/api-request-types';
import type { ConfigResponse, History } from '@/types/api-response-types';

import { client } from './client';

export const fetchHistory = async () => client.get<History[]>('/api/config-history/');

export const fetchHistoryList = async (data: HistoryRequest) =>{
  const res =  await client.post<ConfigResponse>('/api/generate-config/', data);
  return res
}
