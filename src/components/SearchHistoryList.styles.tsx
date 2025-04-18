import styled from 'styled-components';
import theme from '@/styles/theme';

export const HistoryList = styled.div`
  svg {
    width: ${theme.length.lg};
    color: ${theme.color.brandSecondColor};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
`;

export const History = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  font-size: ${theme.fontSize.lg};
  padding: 1rem;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    background: #bfdbff;
    transition: all 0.15s ease-out;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;
