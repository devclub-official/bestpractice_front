import theme from '@/styles/theme';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.color.brandSecondColor};
  padding: 1rem;
  height: 100vh;
  width: 24rem;
  gap: 2rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: white;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 3rem 0;
  }

  .title {
    font-size: ${theme.fontSize.bigTitle};
    color: ${theme.color.brandColor};
    font-weight: bold;
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
