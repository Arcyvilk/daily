import { useAppContext } from 'context';
import { Icon } from 'components/Icon';
import s from './Topbar.module.scss';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Topbar = () => {
  const { theme, setTheme } = useAppContext();
  const [currentDate, setCurrentDate] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(dayjs().format('DD MMMM, dddd, HH:mm:ss'));
    }, 1000);
    return () => clearInterval(interval);
  });

  const getClassName = (className: string) => {
    return `${s[className]} ${[s[`${className}--${theme}`]]} `;
  };

  const onChangeThemeClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className={getClassName('topbar')}>
      <h2 className={s.topbar__date}>{currentDate}</h2>
      <button
        className={getClassName('themeButton')}
        onClick={onChangeThemeClick}>
        {theme === 'light' ? <Icon icon="Moon" /> : <Icon icon="Sun" />}
      </button>
    </div>
  );
};
