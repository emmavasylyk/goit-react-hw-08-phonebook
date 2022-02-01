import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'modern-normalize/modern-normalize.css';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { getIsLoggedIn } from './redux/auth/auth-selectors';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView.js' /* webpackChunkName: "contacts-page" */),
);

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <>
        <AppBar />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LoginView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={isLoggedIn ? <ContactsView /> : <HomeView />}
            />
          </Routes>
        </Suspense>
        <ToastContainer theme={'colored'} />
      </>
    </Container>
  );
}
