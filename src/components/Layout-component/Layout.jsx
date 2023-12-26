import { AppBar } from 'components/AppBar-component/AppBar';
import { GlobalStyle } from 'components/GlobalStyle';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Layout.styled';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
      <Toaster />
    </Wrapper>
  );
};
