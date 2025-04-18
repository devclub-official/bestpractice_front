import LabelInput from './LabelInput';

import { useSearchFormState } from '@/hooks/useSearchFormState';
import { useSelectHistoryMutation } from '@/hooks/useSelectHistoryMutation';
import { FILE_FORMATS, FRAMEWORKS, FUNCTION_LABELS, FUNCTION_OPTIONS, LANGUAGES } from '@/constants/options';

import * as Styled from './SearchForm.styles';

const SearchForm = () => {
  const { mutate: selectHistory } = useSelectHistoryMutation();

  const {
    radios: { language, framework, fileFormat },
    selectRadios,
    selectedOptions,
    selectOptions,
  } = useSearchFormState();

  const handleSubmit = () => {
    selectHistory({
      language,
      framework,
      file_format: fileFormat,
      selected_options: selectedOptions,
    });
  };

  console.log({ language, framework, fileFormat }, selectedOptions);

  return (
    <Styled.Wrapper>
      <Styled.Form>
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
                  value={format}
                  checked={fileFormat === format}
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
      </Styled.Form>
      <Styled.StyledButton onClick={handleSubmit}>전송</Styled.StyledButton>
    </Styled.Wrapper>
  );
};

export default SearchForm;
