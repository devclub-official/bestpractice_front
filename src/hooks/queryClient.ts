import { APP } from '@/constants/app';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: APP.NETWORK.RETRY_COUNT,
      gcTime: 0,
    },
  },
});
