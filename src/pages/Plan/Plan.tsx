import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const days: Record<string, string> = {
  mon: 'https://arcy.notion.site/Poniedzia-ek-bad27740cf4542288fd957d60730dc54?pvs=4',
  tue: 'https://arcy.notion.site/Wtorek-f0f6902b2dea4812aaed15c255573e4b?pvs=4',
  wed: 'https://arcy.notion.site/roda-2a25234a251d4f78a94639fe54934a95?pvs=4',
  thu: 'https://arcy.notion.site/Czwartek-fb780b474f634f03bc7126e69413f32f?pvs=4',
  fri: 'https://arcy.notion.site/Pi-tek-d9dfe677976a40d6b54c747a777bdc37?pvs=4',
  sat: 'https://arcy.notion.site/Sobota-6b49e5a5923c4c45ac06ac4abaec8cab?pvs=4',
  sun: 'https://arcy.notion.site/Niedziela-009889ace2dd44fab893aa314ffc95fa?pvs=4',
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
