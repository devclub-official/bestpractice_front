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
        <SearchForm />
      </Styled.Main>
    </Styled.Layout>
  );
};

export default Layout;
