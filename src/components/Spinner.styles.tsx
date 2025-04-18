import styled, { keyframes } from 'styled-components';
import theme from '@/styles/theme';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid ${theme.color.subText};
  border-top: 6px solid ${theme.color.brandColor};
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;

export const Text = styled.p`
  margin-top: 1rem;
  font-size: ${theme.fontSize.md};
  color: ${theme.color.subText};
`;
