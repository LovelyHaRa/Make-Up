import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './lib/styles/theme';
import { darkTheme } from './lib/styles/theme';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './module/redux/theme';
import PostWritePage from './pages/PostWritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  const { isDarkTheme } = useSelector(({ theme }) => ({
    isDarkTheme: theme.isDarkTheme,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const storageTheme = localStorage.getItem('darkTheme');
      if (storageTheme === 'true') {
        dispatch(setTheme(true));
      }
    } catch (error) {
      throw error;
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <>
        <Helmet>
          <title>MAKE UP HARA</title>
        </Helmet>
        <Route component={MainPage} path={['/']} exact />
        <Route component={LoginPage} path={'/login'} />
        <Route component={RegisterPage} path={'/register'} />
        <Route component={PostWritePage} path={'/blog/write'} />
        <Route component={PostPage} path={'/blog/@:username/:postId'} />
      </>
    </ThemeProvider>
  );
};

export default App;
