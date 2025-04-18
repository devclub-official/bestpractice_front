import LabelInput from './LabelInput';

import { useSearchMutation } from '@/hooks/useSearchMutation';
import { useSearchFormState } from '@/hooks/useSearchFormState';
import { FILE_FORMATS, FRAMEWORKS, FUNCTION_LABELS, FUNCTION_OPTIONS, LANGUAGES } from '@/constants/options';

import * as Styled from './SearchForm.styles';
import { useEffect, useState } from 'react';

const SearchForm = () => {
  const { mutate: search, data } = useSearchMutation();
  const [isSearched, setIsSearched] = useState(false)
console.log('data', data)
  const {
    radios: { language, framework, fileFormat },
    selectRadios,
    selectedOptions,
    selectOptions,
  } = useSearchFormState();

  const handleSubmit = () => {
    search({
      language,
      framework,
      file_format: fileFormat,
      selected_options: selectedOptions,
    });
  };
  useEffect(()=>{
    if(data){
      setIsSearched(true)
    }
  },[data])
  return (
    <Styled.Wrapper>
      {!isSearched && <Styled.Form>
        <LabelInput label="언어">
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {LANGUAGES.map((lang) => (
              <Styled.InputWrapper key={lang}>
                <input type="radio" name="language" value={lang} checked={language === lang} onChange={selectRadios} />
                <span>{lang}</span>
              </Styled.InputWrapper>
            ))}
          </div>
        </LabelInput>

        <LabelInput label="프레임워크">
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {FRAMEWORKS.map((fw) => (
              <Styled.InputWrapper key={fw}>
                <input type="radio" name="framework" value={fw} checked={framework === fw} onChange={selectRadios} />
                <span>{fw}</span>
              </Styled.InputWrapper>
            ))}
          </div>
        </LabelInput>

        <LabelInput label="파일 포맷">
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            {FILE_FORMATS.map((format) => (
              <Styled.InputWrapper key={format}>
                <input
                  type="radio"
                  name="fileFormat"
                  value={'json'}
                  // checked={fileFormat === format}
                  onChange={selectRadios}
                />
                <span>{format}</span>
              </Styled.InputWrapper>
            ))}
          </div>
        </LabelInput>
        <LabelInput label="기능">
          <div style={{ width: '100%', textAlign: 'start' }}>
            {Object.entries(FUNCTION_OPTIONS).map(([key, options]) => (
              <div key={key}>
                <h4>{FUNCTION_LABELS[key] ?? key}</h4> {/* key에 대응하는 한글이 없으면 key 그대로 사용 */}
                {options.map((option) => (
                  <label key={option}>
                    <input type="radio" name={key} value={option} onChange={() => selectOptions(key, option)} />
                    {option}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </LabelInput>
      </Styled.Form>}
      {isSearched && <Styled.ScreenContainer>
          {/* data?.data?.content.replace(r'\\u[0-9a-fA-F]{4}', '') */}
          <pre>{JSON.stringify(data?.data?.content.replace('\\u[0-9a-fA-F]{4}', ''), null, 2)}</pre>
        </Styled.ScreenContainer>}
      {!isSearched && <Styled.StyledButton onClick={handleSubmit}>생성</Styled.StyledButton>}
        {isSearched &&<Styled.StyledButton onClick={()=>setIsSearched(!isSearched)}>다시하기</Styled.StyledButton> }
    </Styled.Wrapper>
  );
};

export default SearchForm;
