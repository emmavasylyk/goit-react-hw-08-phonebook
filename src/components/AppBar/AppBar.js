import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import { useFetchCurrentUserQuery } from '../../redux/auth/auth-reduce';
import { getIsLoggedIn, getToken } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const token = useSelector(getToken);

  const { isLoading } = useFetchCurrentUserQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return (
    <>
      {!isLoading && (
        <header className={s.Header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      )}
    </>
  );
}
