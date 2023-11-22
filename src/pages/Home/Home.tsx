import { useAppContext } from 'context';
import { Tile, Topbar } from 'components';
import s from './Home.module.scss';
import dayjs from 'dayjs';
import { useState } from 'react';

export const Home = (): JSX.Element => {
  const { theme } = useAppContext();

  const main = `${s.main} ${[s[`main--${theme}`]]} `;

  return (
    <div className={main}>
      <Topbar />
      <div className={s.main__content}>
        <Gallery />
      </div>
    </div>
  );
};

const Gallery = () => {
  const { theme } = useAppContext();
  const [day, setDay] = useState<string>(getDayName(dayjs().day()));
  const [period, setPeriod] = useState<number>(getCurrentTimePeriod());

  const week = getWeek();
  const timePeriod = getTimePeriod();

  const link = `https://arcyvilk.com/${day.toLowerCase()}#${period}`;

  return (
    <div className={s.gallery}>
      <div className={s.gallery__section}>
        <h2 className={s.section__title}>Select day</h2>
        <div className={s.section__tiles}>
          {week.map(day => {
            const isActive = dayjs().day() === day;
            const dayName = getDayName(day);
            const onClick = () => setDay(dayName);
            return (
              <Tile
                label={dayName}
                isActive={isActive}
                onClick={onClick}
                key={dayName}
              />
            );
          })}
        </div>
      </div>
      <div className={s.gallery__section}>
        <h2 className={s.section__title}>Select time period</h2>
        <div className={s.section__tiles}>
          {timePeriod.map(period => {
            const isActive = dayjs().hour() < period;
            const onClick = () => setPeriod(period);
            return (
              <Tile
                label={`~${period}`}
                isActive={isActive}
                onClick={onClick}
                key={period}
              />
            );
          })}
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        className={`${s.gallery__link} ${[s[`gallery__link--${theme}`]]}`}>
        Go to {day} before {period}
      </a>
    </div>
  );
};

const getDayName = (day: number) => {
  return dayjs().day(day).format('ddd');
};

const getWeek = () => {
  const week = new Array(7).fill(0).map((_, i) => i);
  const weekFromMonday = week.slice(1).concat(week[0]);
  return weekFromMonday;
};

const getTimePeriod = () => {
  const periods = [10, 12, 16, 20, 22];
  return periods;
};

const getCurrentTimePeriod = () => {
  const periods = getTimePeriod();
  const currentPeriod = periods.find(period => dayjs().hour() < period) ?? 0;
  return currentPeriod;
};
