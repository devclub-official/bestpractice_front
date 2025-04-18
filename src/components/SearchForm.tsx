import LabelInput from './LabelInput';
import { useSelectHistoryMutation } from '@/hooks/useSelectHistoryMutation';

import * as Styled from './SearchForm.styles';

const SearchForm = () => {
  const { mutate: selectHistory } = useSelectHistoryMutation();

  const handleSubmit = () => {
    selectHistory({
      language: 'javascript',
      framework: 'react',
      file_format: 'json',
      features: ['알림', '게시판', '이메일'],
    });
  };

  return (
    <Styled.Wrapper>
      <Styled.Form>
        <LabelInput label="언어" />
        <LabelInput label="프레임워크" />
        <LabelInput label="파일 포맷" />
        <LabelInput label="기능" />
        <button onClick={handleSubmit}>전송</button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};

export default SearchForm;
