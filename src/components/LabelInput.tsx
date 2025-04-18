import * as Styled from './LabelInput.styles';

const LabelInput = ({ label }: { label: string }) => {
  return (
    <Styled.Container>
      <Styled.Label>{label}</Styled.Label>
      <div style={{ display: 'flex', gap: '1.2rem' }}>
        <Styled.InputWrapper>
          <input type="checkbox" />
          <span>Python</span>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <input type="checkbox" />
          <span>Python</span>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <input type="checkbox" />
          <span>Python</span>
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <input type="checkbox" />
          <span>Python</span>
        </Styled.InputWrapper>
      </div>
    </Styled.Container>
  );
};

export default LabelInput;
