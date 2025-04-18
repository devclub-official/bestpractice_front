import theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: bold;
  text-align: left;
  padding-bottom: 0.8rem;
  border-bottom: 1.6px solid ${theme.color.subText};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.8rem;
`;
