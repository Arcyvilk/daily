import { useAppContext } from 'context';
import s from './Tile.module.scss';

type Props = {
  label: string;
  onClick: () => void;
  isActive?: boolean;
};
export const Tile = (props: Props) => {
  const { label, onClick, isActive = false } = props;
  const { theme } = useAppContext();

  const className = `${s.tile} ${isActive ? [s[`tile--active`]] : ''} ${[
    s[`tile--${theme}`],
  ]}`;

  return (
    <button onClick={onClick} className={className}>
      <h2 className={s.tile__title}>{label.toUpperCase()}</h2>
    </button>
  );
};
