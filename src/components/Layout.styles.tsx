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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
  }

  .title {
    font-size: ${theme.fontSize.bigTitle};
    color: ${theme.color.brandColor};
    font-weight: bold;
    padding-top: 2rem;
    padding-bottom: 1rem;
  }

  .details {
    display: block;
    font-size: ${theme.fontSize.subTitle};
    color: #374151;
    line-height: 1.6;

    p {
      margin-top: 0.5rem;
      font-size: ${theme.fontSize.xl};
      color: #6b7280;
    }
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
