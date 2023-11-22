import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from 'context';
import { Button } from 'components';
import s from './Login.module.scss';

export const Login = (): JSX.Element => {
  const { setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const users = [
    {
      username: process.env.REACT_APP_USERNAME,
      pwd: process.env.REACT_APP_PWD,
    },
  ];
  console.log(users);

  const onClick = () => {
    if (users.some(user => user.username === username && user.pwd === pwd)) {
      setIsLoggedIn({ isLoggedIn: true });
      navigate('/daily');
    } else {
      alert('Wrong username or password');
    }
  };

  return (
    <div className={s.login}>
      <h2 className={s.login__title}>Login</h2>
      <input
        className={s.login__input}
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className={s.login__input}
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={e => setPwd(e.target.value)}
      />
      <Button label={'Login'} onClick={onClick} />
    </div>
  );
};
