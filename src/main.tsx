import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import App from './App.tsx';
import { queryClient } from './hooks/queryClient.ts';
import { GlobalStyles } from './styles/GlobalStyles.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>
);
