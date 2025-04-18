import { useMutation } from '@tanstack/react-query';
import { fetchHistoryList } from '@/apis/history-api';

export const useSearchMutation = () => {
  return useMutation({
    mutationFn: fetchHistoryList,
    onSuccess: (res) => {
      console.log('res,',res)
      
      alert('검색이 완료되었습니다!');
    },
    onError: (error) => {
      alert('요청이 실패되었습니다.');
      console.error(error);
    },
  });
};
