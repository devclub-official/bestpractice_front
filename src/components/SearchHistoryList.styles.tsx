import styled from 'styled-components';
import theme from '@/styles/theme';

export const HistoryList = styled.div`
  svg {
    width: ${theme.length.lg};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
`;

export const History = styled.div`
  padding: 0.2rem;
  font-size: ${theme.fontSize.lg};
`;
