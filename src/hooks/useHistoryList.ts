import { useQuery } from '@tanstack/react-query';

import { fetchHistory } from '../apis/history-api';

export const useHistory = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['history'],
    queryFn: () => fetchHistory(),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return {
    data: data?.data,
    ...rest,
  };
};
