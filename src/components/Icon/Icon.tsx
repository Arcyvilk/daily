import React from 'react';

import icons, { IconType as AssetIconType } from 'assets/icons';
import s from './Icon.module.scss';

type Props = {
  icon: AssetIconType;
} & Omit<React.CSSProperties, 'width' | 'height'>;

export const Icon = (props: Props): JSX.Element => {
  const { icon } = props;
  const SVG = icons[icon];

  return (
    <span className={s.icon}>
      <SVG />
    </span>
  );
};

export type IconType = AssetIconType;
