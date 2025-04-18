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
          <span>나만의 Best Practice를 발견하세요.</span>
        </div>
        <Styled.FormSection>
          <SearchForm />
        </Styled.FormSection>
      </Styled.Main>
    </Styled.Layout>
  );
};

export default Layout;
