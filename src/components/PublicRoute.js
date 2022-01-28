import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  if (!shouldRedirect) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}
