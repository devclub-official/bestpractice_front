import theme from '@/styles/theme';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  // border: 1px solid black;
  padding: 2rem;
  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow: auto;
  height: 50rem;
`;

export const StyledButton = styled.button`
  padding: 2rem;
  background: ${theme.color.brandColor};
  color: ${theme.color.white};
  border: none;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.15s ease-out;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.8rem;
`;
