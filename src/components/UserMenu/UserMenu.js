import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
// import authSelectors from '../../redux/auth';
import { useLogoutUserMutation } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css';
import { ImExit } from 'react-icons/im';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  const [logoutUser] = useLogoutUserMutation();

  return (
    <div className={s.Container}>
      <img src={avatar} alt="" width="32" className={s.Avatar} />
      <span className={s.Name}>Welcome home, {name}!</span>
      <button className={s.Button} type="button" onClick={() => logoutUser()}>
        <ImExit className={s.ButtonIcon} />
        Log out
      </button>
    </div>
  );
}
