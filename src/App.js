import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { Loader } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'modern-normalize/modern-normalize.css';
import './App.css';
import Container from './components/Container';
import AppBar from './components/AppBar';
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
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        {/* <h1 className={Title}>Phonebook</h1>
      <ContactForm />
      <h2 className={Title}>Contacts</h2>
      <Filter />
      {<ContactList />}
      <ToastContainer theme={'colored'} /> */}
      </Suspense>
    </Container>
  );
}
