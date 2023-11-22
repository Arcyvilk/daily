import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAppContext } from 'context';
import { Topbar } from 'components';
import { Gallery } from 'pages/Gallery';
import { Plan } from 'pages/Plan';
import { Login } from 'pages/Login';

import s from './Home.module.scss';

export const Home = (): JSX.Element => {
  const { theme } = useAppContext();
  const main = `${s.main} ${[s[`main--${theme}`]]} `;

  return (
    <div className={main}>
      <Topbar />
      <div className={s.main__content}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/daily" element={<Gallery />} />
            <Route path="/daily/plan" element={<Plan />} />
            {/* <Route path="*" element={<Navigate to="/daily" />}></Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
