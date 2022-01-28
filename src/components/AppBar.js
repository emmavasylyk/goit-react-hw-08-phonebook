import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav';
import { useFetchCurrentUserQuery } from '../redux/auth/auth-reduce';
import { getIsLoggedIn, getToken } from '../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);

  const token = useSelector(getToken);

  const { isLoading } = useFetchCurrentUserQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return (
    <>
      {isLoading ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <header style={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </header>
        </>
      )}
    </>
  );
}
