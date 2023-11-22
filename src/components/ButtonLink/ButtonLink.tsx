import { useAppContext } from 'context';
import s from './ButtonLink.module.scss';

type Props = {
  label: string;
  link: string;
};
export const ButtonLink = ({ label, link }: Props) => {
  const { theme } = useAppContext();
  return (
    <a href={link} className={`${s.buttonLink} ${[s[`buttonLink--${theme}`]]}`}>
      {label}
    </a>
  );
};
