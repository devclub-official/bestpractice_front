import SearchForm from './SearchForm';
import SearchHistoryList from './SearchHistoryList';

import * as Styled from './Layout.styles';

const Layout = () => {
  return (
    <Styled.Layout>
      <Styled.SideBar>
        <SearchHistoryList />
      </Styled.SideBar>
      <Styled.Main>
        <div>
          <span className="title">Best Practice</span>
          <span className="details">
            나만의 Best Practice를 발견하세요!
            <p>
              지금 바로 시작하고, 당신만의 개발 환경을 완성해보세요. 클릭 몇 번으로, 복잡한 설정 없이 시작할 수
              있습니다.
            </p>
          </span>
        </div>
        <Styled.FormSection>
          <SearchForm />
        </Styled.FormSection>
      </Styled.Main>
    </Styled.Layout>
  );
};

export default Layout;
