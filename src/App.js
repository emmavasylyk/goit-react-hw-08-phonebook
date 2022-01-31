import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
// import { Loader } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authSelectors } from './redux/auth';
import { useFetchCurrentUserQuery } from './redux/auth';
import { getIsLoggedIn } from './redux/auth/auth-selectors';
// import ErrorMessage from './components/Error/ErrorMessages';

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
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  // const dispatch = useDispatch();
  // const [error, setError] = useState(null);
  // const { error } = useFetchCurrentUserQuery();
  // console.log('error5555555', errorFetch);
  // setError(errorFetch);
  // console.log('errorFetch', error);
  // console.log('Error', Error);
  // const isLoggedIn = useSelector(getUserStatus);
  const isLoggedIn = useSelector(getIsLoggedIn);

  // const message = JSON.stringify(error.data);
  // console.log('error!!!!!!!!', message);
  // ErrorMessage(message);

  // useEffect(() => {
  //   if (error) {
  //     console.log('error!!!!!!!!', error.data);
  //     dispatch(ErrorMessage(error.data));
  //     // onError(error.data);
  //   }
  // }, [error]);

  // const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log('isFetchingCurrentUser', isFetchingCurrentUser);
  // const [fetchCurrentUser] = useFetchCurrentUserQuery;
  // console.log('fetchCurrentUser', fetchCurrentUser);

  // useEffect(() => {
  //   dispatch(useFetchCurrentUserQuery());
  // }, [dispatch]);

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
