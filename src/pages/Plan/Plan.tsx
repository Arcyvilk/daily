import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const days: Record<string, string> = {
  mon: 'https://arcy.notion.site/Poniedzia-ek-305afd8c365341818813338019163a84?pvs=4',
  tue: 'https://arcy.notion.site/Wtorek-19b12c04d0864b1fbc77b8d58f9d30ca?pvs=4',
  wed: 'https://arcy.notion.site/roda-e944fbd6a15641ae849de8e9702cea2f?pvs=4',
  thu: 'https://arcy.notion.site/Czwartek-fb780b474f634f03bc7126e69413f32f?pvs=4',
  fri: 'https://arcy.notion.site/Pi-tek-842171c13bd0474cb54b2da3a98f76bb?pvs=4',
  sat: 'https://arcy.notion.site/Sobota-c3dc4abd7b05478cb230fce2d7e71e4b?pvs=4',
  sun: 'https://arcy.notion.site/Niedziela-3b1dcff065294019989ee6a68f67d855?pvs=4',
};

export const Plan = (): JSX.Element => {
  const [searchParams] = useSearchParams();
  const day = searchParams.get('day');
  const period = searchParams.get('period');

  const src = day && period ? `${days[day]}#${period}` : null;

  useEffect(() => {
    if (src) window.location.href = src;
  }, []);

  return <div>Loading...</div>;
};
