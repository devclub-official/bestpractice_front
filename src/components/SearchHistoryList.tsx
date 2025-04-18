import { useHistory } from '@/hooks/useHistoryList';
import { Bars3Icon } from '@heroicons/react/16/solid';

import * as Styled from './SearchHistoryList.styles';

const SearchHistoryList = () => {
  const { data: histories } = useHistory();

  const MOCKUP =
    ' 로그인 비밀번호\\n\\n# 게시판 기능 관련 설정\\nbulletin-board:\\n  enabled: true  # 게시판 기능 활성화 여부\\n  max-posts: 100  # 게시판에 보여줄 최대 게시글 수\\n  pagination:\\n    size: 10  # 한 페이지에 보여줄 게시글 수\\n  # 게시판 카테고리별 필터 설정 (예시)\\n  categories:\\n    - notice\\n    - review\\n    - announcement\\n\\n# 이메일 서비스 관련 설정\\nemail:\\n  enabled: true  # 이';

  return (
    <>
      <Styled.HistoryList>
        <Bars3Icon />
      </Styled.HistoryList>
      <Styled.ListWrapper>
        {histories?.map((history) => (
          <Styled.History key={history.id}>
            <span>{history.id}</span>
            <span>{MOCKUP.slice(0, 30)}</span>
          </Styled.History>
        ))}
      </Styled.ListWrapper>
    </>
  );
};

export default SearchHistoryList;
