import * as Styled from './Spinner.styles';

const Spinner = () => {
  return (
    <Styled.Container>
      <Styled.Loader />
      <Styled.Text>로딩 중입니다...</Styled.Text>
    </Styled.Container>
  );
};

export default Spinner;
