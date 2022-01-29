import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';
// import { ToastContainer } from 'react-toastify';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
// import NotFoundView from './views/NotFoundView';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView.js' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView.js' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView.js' /* webpackChunkName: "contacts-page" */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  // console.log('isFetchingCurrentUser', isFetchingCurrentUser);
  // const [fetchCurrentUser] = useFetchCurrentUserQuery;
  // console.log('fetchCurrentUser', fetchCurrentUser);

  // useEffect(() => {
  //   dispatch(useFetchCurrentUserQuery());
  // }, [dispatch]);

  return (
    <Container>
      {/* {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : ( */}
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
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </>
      {/* )} */}
    </Container>
  );
}
