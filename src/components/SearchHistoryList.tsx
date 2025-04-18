import { useHistory } from '@/hooks/useHistoryList';
import { Bars3Icon } from '@heroicons/react/16/solid';

import * as Styled from './SearchHistoryList.styles';

const SearchHistoryList = () => {
  const { data: histories } = useHistory();

  return (
    <>
      <Styled.HistoryList>
        <Bars3Icon />
      </Styled.HistoryList>
      <Styled.ListWrapper>
        {histories?.map((history) => {
          const createdAt = history.created_at.split('T')[0];
          return (
            <Styled.History key={history.id}>
              <span>{history.id}</span>
              <Styled.Item>
                <span>{history.framework}</span>
                <span>{createdAt}</span>
              </Styled.Item>
            </Styled.History>
          );
        })}
      </Styled.ListWrapper>
    </>
  );
};

export default SearchHistoryList;
