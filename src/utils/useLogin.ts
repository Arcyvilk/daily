import { useNavigate } from 'react-router-dom';
import { useAppContext } from 'context';
import { useEffect } from 'react';

export const useLogin = () => {
  const { isLoggedIn } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn.isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);
};
