import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import authSelectors from '../../redux/auth';
import { useLogoutUserMutation } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  // console.log('name', name);
  const avatar = defaultAvatar;
  const [logoutUser] = useLogoutUserMutation();

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => logoutUser()}>
        Выйти
      </button>
    </div>
  );
}
