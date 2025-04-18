import { Global, css } from '@emotion/react';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

        html {
          font-size: 62.5%;
        }

        body {
          margin: 0;
          font-size: 160%;
          letter-spacing: 0.05em;
          line-height: 1.7;
        }

        #root {
          min-height: 100vh;
        }

        * {
          &,
          &:before,
          &:after {
            box-sizing: border-box;
          }
        }
      `}
    />
  );
};
