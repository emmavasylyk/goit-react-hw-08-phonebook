import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { authSelectors } from '../redux/auth';
import { getIsLoggedIn } from '../redux/auth/auth-selectors';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={redirectTo} />;
}
