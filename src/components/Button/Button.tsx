import { useAppContext } from 'context';
import s from './Button.module.scss';

type Props = {
  label: string;
  onClick: () => void;
};
export const Button = ({ label, onClick }: Props) => {
  const { theme } = useAppContext();
  return (
    <button
      className={`${s.button} ${[s[`button--${theme}`]]}`}
      onClick={onClick}>
      {label}
    </button>
  );
};
