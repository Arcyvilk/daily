import { useLogin } from 'utils/useLogin';
import s from './Plan.module.scss';

export const Plan = (): JSX.Element => {
  useLogin();

  return <div className={s.plan}>Dupa</div>;
};
